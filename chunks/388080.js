n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    d = n(120356),
    o = n.n(d),
    a = n(913527),
    l = n.n(a),
    s = n(481060),
    c = n(446411),
    m = n(468846),
    _ = n(600164),
    h = n(70097),
    b = n(299379),
    u = n(454585),
    g = n(524444),
    p = n(55406),
    x = n(981631),
    f = n(388032),
    C = n(617768),
    E = n(811628);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let A = u.Z.reactParserFor(p.default.getDefaultRules(C)),
    k = {};
class j extends i.PureComponent {
    track(e, t, n) {
        this.props.track(e, t, n);
    }
    renderFooter() {
        return (0, r.jsxs)('div', {
            className: C.footer,
            children: [
                (0, r.jsx)(s.eee, {
                    'aria-label': f.intl.string(f.t['/84uiI']),
                    className: C.socialLink,
                    href: (0, b.Z)(x.RK.TWITTER),
                    target: 'blank',
                    children: (0, r.jsx)(s.TAi, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(s.eee, {
                    'aria-label': f.intl.string(f.t['h0or/v']),
                    className: C.socialLink,
                    href: x.fK7.FACEBOOK_URL,
                    target: 'blank',
                    children: (0, r.jsx)(s.tdR, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(s.eee, {
                    'aria-label': f.intl.string(f.t['5uVPyc']),
                    className: C.socialLink,
                    href: x.fK7.INSTAGRAM_URL,
                    target: 'blank',
                    children: (0, r.jsx)(s.gST, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/normal',
                    children: f.intl.string(f.t.EjVVIy)
                })
            ]
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            i = e.video,
            d = e.image;
        if (null != t && '' !== t)
            return (0, r.jsx)(c.BC, {
                className: o()(C.video),
                allowFullScreen: !1,
                href: 'https://youtu.be/'.concat(t),
                thumbnail: {
                    url: 'https://i.ytimg.com/vi/'.concat(t, '/hqdefault.jpg'),
                    width: 451,
                    height: 254
                },
                video: {
                    url: 'https://www.youtube.com/embed/'.concat(t, '?vq=large&rel=0&controls=0&showinfo=0'),
                    width: 451,
                    height: 254
                },
                provider: m.pn.YOUTUBE,
                maxWidth: 451,
                maxHeight: 254,
                renderVideoComponent: g.lV,
                renderImageComponent: g.Yi,
                renderLinkComponent: g.iT,
                onPlay: () => {
                    this.track(x.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                }
            });
        if (null != i && '' !== i) {
            let e = i.startsWith('https://') ? i : n(595173)('./'.concat(i));
            return (0, r.jsx)(h.Z, {
                src: e,
                poster: d,
                width: 451,
                height: 254,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: C.video,
                onPlay: () => {
                    this.track(x.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                }
            });
        }
        if (null == d || '' === d) return null;
        {
            let e = d.startsWith('https://') ? d : n(595173)('./'.concat(d));
            return (0, r.jsx)('img', {
                className: C.image,
                alt: '',
                src: e,
                width: 451,
                height: 254
            });
        }
    }
    render() {
        let { changeLog: e } = this.props;
        return (0, r.jsxs)(s.Y0X, {
            transitionState: s.Dvm.ENTERED,
            className: E.modal,
            children: [
                (0, r.jsxs)(s.xBx, {
                    align: _.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        this.renderHeader(),
                        (0, r.jsx)(_.Z.Child, {
                            grow: 0,
                            children: (0, r.jsx)(s.olH, { onClick: this.props.onClose })
                        })
                    ]
                }),
                (0, r.jsx)(s.hzk, {
                    className: o()(E.content, C.container, {}),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, r.jsxs)('div', {
                        tabIndex: 0,
                        role: 'region',
                        'aria-label': f.intl.string(f.t.HzBchI),
                        children: [
                            this.renderVideo(),
                            A(e.body, !1, {
                                changeLog: this,
                                interpolations: k,
                                onLinkClick: this.trackLinkClick
                            })
                        ]
                    })
                }),
                (0, r.jsx)(s.mzw, {
                    direction: _.Z.Direction.HORIZONTAL,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'scrollerRef', i.createRef()),
            S(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, n;
                    null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e);
                }
            }),
            S(this, 'trackLinkClick', (e) => {
                this.props.track(
                    x.rMx.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: 'inline_link',
                        target: e
                    },
                    !1
                );
            }),
            S(this, 'renderHeader', () => {
                let { changeLog: e } = this.props;
                return (0, r.jsxs)(_.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            children: f.intl.string(f.t.LRmNAg)
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            className: C.date,
                            children: f.intl.format(f.t.Fb8xx8, { date: null != e.date && '' !== e.date ? l()(e.date).toDate() : new Date() })
                        })
                    ]
                });
            });
    }
}
let I = j;
