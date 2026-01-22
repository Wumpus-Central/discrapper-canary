r.d(t, {
    A: () => k,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    o = r(989349),
    i = r.n(o),
    c = r(158954),
    a = r(397927),
    s = r(871751),
    u = r(259407),
    h = r(607470),
    d = r(472501),
    g = r(46054),
    p = r(652176),
    f = r(550997),
    b = r(652215),
    O = r(985018),
    m = r(903957);

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
let j = g.A.reactParserFor(f.default.getDefaultRules(m)),
    A = {};
class w extends l.PureComponent {
    track(e, t, r) {
        this.props.track(e, t, r);
    }
    renderFooter() {
        return (0, n.jsxs)("div", {
            className: m.footer,
            children: [
                (0, n.jsx)(a.MzZ, {
                    "aria-label": O.intl.string(O.t["/84uiD"]),
                    className: m.socialLink,
                    href: (0, d.A)(b.Pq7.TWITTER),
                    target: "blank",
                    children: (0, n.jsx)(a.p3p, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, n.jsx)(a.MzZ, {
                    "aria-label": O.intl.string(O.t["h0or/l"]),
                    className: m.socialLink,
                    href: b.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, n.jsx)(a.Zc1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, n.jsx)(a.MzZ, {
                    "aria-label": O.intl.string(O.t["5uVPyf"]),
                    className: m.socialLink,
                    href: b.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, n.jsx)(a.LyU, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    children: O.intl.string(O.t.EjVVI7),
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
            return (0, n.jsx)(s.rr, {
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
                provider: u.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: p.$o,
                renderImageComponent: p.LL,
                renderLinkComponent: p.bU,
                onPlay: () => {
                    this.track(b.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != l && "" !== l) {
            let e = l.startsWith("https://") ? l : r(274516)("./".concat(l));
            return (0, n.jsx)(h.A, {
                src: e,
                poster: o,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: m.video,
                onPlay: () => {
                    this.track(b.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == o || "" === o) return null;
        {
            let e = o.startsWith("https://") ? o : r(274516)("./".concat(o));
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
                    l,
                    o = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                        (n = r[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                    return o;
                }
                if (
                    ((o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            o = Object.getOwnPropertyNames(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                        return l;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                        (n = r[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                return o;
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
                    title: O.intl.string(O.t.LRmNAl),
                    subtitle: O.intl.format(O.t.Fb8xx2, {
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
                        "aria-label": O.intl.string(O.t.HzBchE),
                        children: [
                            this.renderVideo(),
                            j(l.body, !1, {
                                changeLog: this,
                                interpolations: A,
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
                    b.HAw.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: "inline_link",
                        target: e,
                    },
                    !1,
                );
            });
    }
}
let k = w;
