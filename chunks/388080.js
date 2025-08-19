n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    i = n.n(a),
    l = n(913527),
    c = n.n(l),
    s = n(481060),
    d = n(446411),
    u = n(468846),
    m = n(600164),
    p = n(70097),
    b = n(299379),
    h = n(454585),
    _ = n(524444),
    g = n(55406),
    f = n(981631),
    y = n(388032),
    O = n(491068),
    j = n(400167);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let v = h.Z.reactParserFor(g.default.getDefaultRules(O)),
    C = {};
class k extends o.PureComponent {
    track(e, t, n) {
        this.props.track(e, t, n);
    }
    renderFooter() {
        return (0, r.jsxs)("div", {
            className: O.footer,
            children: [
                (0, r.jsx)(s.eee, {
                    "aria-label": y.intl.string(y.t["/84uiI"]),
                    className: O.socialLink,
                    href: (0, b.Z)(f.RK.TWITTER),
                    target: "blank",
                    children: (0, r.jsx)(s.TAi, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsx)(s.eee, {
                    "aria-label": y.intl.string(y.t["h0or/v"]),
                    className: O.socialLink,
                    href: f.fK7.FACEBOOK_URL,
                    target: "blank",
                    children: (0, r.jsx)(s.tdR, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsx)(s.eee, {
                    "aria-label": y.intl.string(y.t["5uVPyc"]),
                    className: O.socialLink,
                    href: f.fK7.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, r.jsx)(s.gST, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    children: y.intl.string(y.t.EjVVIy),
                }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            o = e.video,
            a = e.image;
        if (null != t && "" !== t)
            return (0, r.jsx)(d.BC, {
                className: O.video,
                allowFullScreen: !1,
                href: "https://youtu.be/".concat(t),
                thumbnail: {
                    url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
                    width: 451,
                    height: 254,
                },
                video: {
                    url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
                    width: 451,
                    height: 254,
                },
                provider: u.pn.YOUTUBE,
                maxWidth: 451,
                maxHeight: 254,
                renderVideoComponent: _.lV,
                renderImageComponent: _.Yi,
                renderLinkComponent: _.iT,
                onPlay: () => {
                    this.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != o && "" !== o) {
            let e = o.startsWith("https://") ? o : n(595173)("./".concat(o));
            return (0, r.jsx)(p.Z, {
                src: e,
                poster: a,
                width: 451,
                height: 254,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: O.video,
                onPlay: () => {
                    this.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == a || "" === a) return null;
        {
            let e = a.startsWith("https://") ? a : n(595173)("./".concat(a));
            return (0, r.jsx)("img", {
                className: O.image,
                alt: "",
                src: e,
                width: 451,
                height: 254,
            });
        }
    }
    render() {
        let { changeLog: e } = this.props;
        return (0, r.jsxs)(s.Y0X, {
            transitionState: s.Dvm.ENTERED,
            className: j.modal,
            parentComponent: "ChangelogStandardTemplate",
            children: [
                (0, r.jsxs)(s.xBx, {
                    align: m.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        this.renderHeader(),
                        (0, r.jsx)(m.Z.Child, {
                            grow: 0,
                            children: (0, r.jsx)(s.olH, { onClick: this.props.onClose }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.hzk, {
                    className: i()(j.content, O.container, {}),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, r.jsxs)("div", {
                        tabIndex: 0,
                        role: "region",
                        "aria-label": y.intl.string(y.t.HzBchI),
                        children: [
                            this.renderVideo(),
                            v(e.body, !1, {
                                changeLog: this,
                                interpolations: C,
                                onLinkClick: this.trackLinkClick,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(s.mzw, {
                    direction: m.Z.Direction.HORIZONTAL,
                    children: this.renderFooter(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "scrollerRef", o.createRef()),
            x(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, n;
                    null == (t = (n = this.props).onScroll) || t.call(n, e);
                }
            }),
            x(this, "trackLinkClick", (e) => {
                this.props.track(
                    f.rMx.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: "inline_link",
                        target: e,
                    },
                    !1,
                );
            }),
            x(this, "renderHeader", () => {
                let { changeLog: e } = this.props;
                return (0, r.jsxs)(m.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-lg/semibold",
                            children: y.intl.string(y.t.LRmNAg),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            className: O.date,
                            children: y.intl.format(y.t.Fb8xx8, {
                                date: null != e.date && "" !== e.date ? c()(e.date).toDate() : new Date(),
                            }),
                        }),
                    ],
                });
            });
    }
}
let E = k;
