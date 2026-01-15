r.d(t, { Z: () => C }), r(388685);
var n = r(54381),
    l = r(473749),
    o = r(913527),
    i = r.n(o),
    c = r(793030),
    a = r(481060),
    s = r(446411),
    u = r(468846),
    h = r(70097),
    d = r(299379),
    g = r(454585),
    p = r(524444),
    f = r(55406),
    O = r(981631),
    b = r(388032),
    m = r(653198);
function y(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let j = g.Z.reactParserFor(f.default.getDefaultRules(m)),
    x = {};
class k extends l.PureComponent {
    track(e, t, r) {
        this.props.track(e, t, r);
    }
    renderFooter() {
        return (0, n.jsxs)("div", {
            className: m.footer,
            children: [
                (0, n.jsx)(a.eee, {
                    "aria-label": b.intl.string(b.t["/84uiD"]),
                    className: m.socialLink,
                    href: (0, d.Z)(O.RK.TWITTER),
                    target: "blank",
                    children: (0, n.jsx)(a.TAi, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, n.jsx)(a.eee, {
                    "aria-label": b.intl.string(b.t["h0or/l"]),
                    className: m.socialLink,
                    href: O.fK7.FACEBOOK_URL,
                    target: "blank",
                    children: (0, n.jsx)(a.tdR, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, n.jsx)(a.eee, {
                    "aria-label": b.intl.string(b.t["5uVPyf"]),
                    className: m.socialLink,
                    href: O.fK7.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, n.jsx)(a.gST, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: b.intl.string(b.t.EjVVI7),
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
            return (0, n.jsx)(s.BC, {
                className: m.video,
                allowFullScreen: !1,
                href: "https://youtu.be/".concat(t),
                thumbnail: {
                    url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
                    width: 432,
                    height: 240,
                },
                video: {
                    url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
                    width: 432,
                    height: 240,
                },
                provider: u.pn.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: p.lV,
                renderImageComponent: p.Yi,
                renderLinkComponent: p.iT,
                onPlay: () => {
                    this.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != l && "" !== l) {
            let e = l.startsWith("https://") ? l : r(595173)("./".concat(l));
            return (0, n.jsx)(h.Z, {
                src: e,
                poster: o,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: m.video,
                onPlay: () => {
                    this.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == o || "" === o) return null;
        {
            let e = o.startsWith("https://") ? o : r(595173)("./".concat(o));
            return (0, n.jsx)("img", {
                className: m.image,
                alt: "",
                src: e,
                width: 432,
                height: 240,
            });
        }
    }
    render() {
        var e, t;
        let r = this.props,
            { changeLog: l, onScroll: o, track: a } = r,
            s = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(r, ["changeLog", "onScroll", "track"]);
        return (0, n.jsx)(
            c.Modal,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            y(e, t, r[t]);
                        });
                }
                return e;
            })({}, s)),
            (t = t =
                {
                    title: b.intl.string(b.t.LRmNAl),
                    subtitle: b.intl.format(b.t.Fb8xx2, {
                        date: null != l.date && "" !== l.date ? i()(l.date).toDate() : new Date(),
                    }),
                    actions: [],
                    actionBarInput: this.renderFooter(),
                    onClose: () => Promise.resolve(this.props.onClose()),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, n.jsxs)("div", {
                        tabIndex: 0,
                        role: "region",
                        "aria-label": b.intl.string(b.t.HzBchE),
                        children: [
                            this.renderVideo(),
                            j(l.body, !1, {
                                changeLog: this,
                                interpolations: x,
                                onLinkClick: this.trackLinkClick,
                            }),
                        ],
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(t)).forEach(function (r) {
                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                  }),
            e),
        );
    }
    constructor(...e) {
        super(...e),
            y(this, "scrollerRef", l.createRef()),
            y(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, r;
                    null == (t = (r = this.props).onScroll) || t.call(r, e);
                }
            }),
            y(this, "trackLinkClick", (e) => {
                this.props.track(
                    O.rMx.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: "inline_link",
                        target: e,
                    },
                    !1,
                );
            });
    }
}
let C = k;
