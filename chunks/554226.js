n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    l = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(913527),
    s = n.n(i),
    c = n(481060),
    d = n(446411),
    h = n(468846),
    u = n(600164),
    g = n(70097),
    p = n(299379),
    m = n(454585),
    f = n(524444),
    x = n(55406),
    j = n(981631),
    C = n(388032),
    b = n(491068),
    O = n(400167);
function k(e, t, n) {
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
let y = m.Z.reactParserFor(x.default.getDefaultRules(b)),
    E = {};
class S extends l.PureComponent {
    track(e, t, n) {
        this.props.track(e, t, n);
    }
    renderFooter() {
        return (0, r.jsxs)("div", {
            className: b.footer,
            children: [
                (0, r.jsx)(c.Anchor, {
                    "aria-label": C.intl.string(C.t["/84uiD"]),
                    className: b.socialLink,
                    href: (0, p.Z)(j.RK.TWITTER),
                    target: "blank",
                    children: (0, r.jsx)(c.TAi, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsx)(c.Anchor, {
                    "aria-label": C.intl.string(C.t["h0or/l"]),
                    className: b.socialLink,
                    href: j.fK7.FACEBOOK_URL,
                    target: "blank",
                    children: (0, r.jsx)(c.tdR, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsx)(c.Anchor, {
                    "aria-label": C.intl.string(C.t["5uVPyf"]),
                    className: b.socialLink,
                    href: j.fK7.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, r.jsx)(c.gST, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    children: C.intl.string(C.t.EjVVI7),
                }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            l = e.video,
            o = e.image;
        if (null != t && "" !== t)
            return (0, r.jsx)(d.BC, {
                className: b.video,
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
                provider: h.pn.YOUTUBE,
                maxWidth: 451,
                maxHeight: 254,
                renderVideoComponent: f.lV,
                renderImageComponent: f.Yi,
                renderLinkComponent: f.iT,
                onPlay: () => {
                    this.track(j.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != l && "" !== l) {
            let e = l.startsWith("https://") ? l : n(595173)("./".concat(l));
            return (0, r.jsx)(g.Z, {
                src: e,
                poster: o,
                width: 451,
                height: 254,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: b.video,
                onPlay: () => {
                    this.track(j.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == o || "" === o) return null;
        {
            let e = o.startsWith("https://") ? o : n(595173)("./".concat(o));
            return (0, r.jsx)("img", {
                className: b.image,
                alt: "",
                src: e,
                width: 451,
                height: 254,
            });
        }
    }
    render() {
        let { changeLog: e } = this.props;
        return (0, r.jsxs)(c.Y0X, {
            transitionState: c.Dvm.ENTERED,
            className: O.modal,
            parentComponent: "ChangeLogStandardTemplate",
            children: [
                (0, r.jsxs)(c.xBx, {
                    align: u.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        this.renderHeader(),
                        (0, r.jsx)(u.Z.Child, {
                            grow: 0,
                            children: (0, r.jsx)(c.olH, { onClick: this.props.onClose }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.hzk, {
                    className: a()(O.content, b.container, {}),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, r.jsxs)("div", {
                        tabIndex: 0,
                        role: "region",
                        "aria-label": C.intl.string(C.t.HzBchE),
                        children: [
                            this.renderVideo(),
                            y(e.body, !1, {
                                changeLog: this,
                                interpolations: E,
                                onLinkClick: this.trackLinkClick,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(c.mzw, {
                    direction: u.Z.Direction.HORIZONTAL,
                    children: this.renderFooter(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            k(this, "scrollerRef", l.createRef()),
            k(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, n;
                    null == (t = (n = this.props).onScroll) || t.call(n, e);
                }
            }),
            k(this, "trackLinkClick", (e) => {
                this.props.track(
                    j.rMx.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: "inline_link",
                        target: e,
                    },
                    !1,
                );
            }),
            k(this, "renderHeader", () => {
                let { changeLog: e } = this.props;
                return (0, r.jsxs)(u.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            children: C.intl.string(C.t.LRmNAl),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            className: b.date,
                            children: C.intl.format(C.t.Fb8xx2, {
                                date: null != e.date && "" !== e.date ? s()(e.date).toDate() : new Date(),
                            }),
                        }),
                    ],
                });
            });
    }
}
let _ = S;
