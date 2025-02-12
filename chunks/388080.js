n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    d = n(481060),
    c = n(446411),
    u = n(468846),
    _ = n(600164),
    m = n(70097),
    p = n(299379),
    h = n(454585),
    g = n(524444),
    b = n(55406),
    f = n(981631),
    x = n(388032),
    k = n(702470),
    C = n(927004);
function E(e, t, n) {
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
let R = h.Z.reactParserFor(b.default.getDefaultRules(k)),
    S = {};
class v extends i.PureComponent {
    track(e, t, n) {
        this.props.track(e, t, n);
    }
    renderFooter() {
        return (0, r.jsxs)('div', {
            className: k.footer,
            children: [
                (0, r.jsx)(d.eee, {
                    'aria-label': x.intl.string(x.t['/84uiI']),
                    className: k.socialLink,
                    href: (0, p.Z)(f.RK.TWITTER),
                    target: 'blank',
                    children: (0, r.jsx)(d.TAi, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(d.eee, {
                    'aria-label': x.intl.string(x.t['h0or/v']),
                    className: k.socialLink,
                    href: f.fK7.FACEBOOK_URL,
                    target: 'blank',
                    children: (0, r.jsx)(d.tdR, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(d.eee, {
                    'aria-label': x.intl.string(x.t['5uVPyc']),
                    className: k.socialLink,
                    href: f.fK7.INSTAGRAM_URL,
                    target: 'blank',
                    children: (0, r.jsx)(d.gST, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    children: x.intl.string(x.t.EjVVIy)
                })
            ]
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            i = e.video,
            a = e.image;
        if (null != t && '' !== t)
            return (0, r.jsx)(c.BC, {
                className: o()(k.video),
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
                provider: u.pn.YOUTUBE,
                maxWidth: 451,
                maxHeight: 254,
                renderVideoComponent: g.lV,
                renderImageComponent: g.Yi,
                renderLinkComponent: g.iT,
                onPlay: () => {
                    this.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                }
            });
        if (null != i && '' !== i) {
            let e = i.startsWith('https://') ? i : n(595173)('./'.concat(i));
            return (0, r.jsx)(m.Z, {
                src: e,
                poster: a,
                width: 451,
                height: 254,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: k.video,
                onPlay: () => {
                    this.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                }
            });
        }
        if (null == a || '' === a) return null;
        {
            let e = a.startsWith('https://') ? a : n(595173)('./'.concat(a));
            return (0, r.jsx)('img', {
                className: k.image,
                alt: '',
                src: e,
                width: 451,
                height: 254
            });
        }
    }
    render() {
        let { changeLog: e } = this.props;
        return (0, r.jsxs)(d.Y0X, {
            transitionState: d.Dvm.ENTERED,
            className: C.modal,
            children: [
                (0, r.jsxs)(d.xBx, {
                    align: _.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        this.renderHeader(),
                        (0, r.jsx)(_.Z.Child, {
                            grow: 0,
                            children: (0, r.jsx)(d.olH, { onClick: this.props.onClose })
                        })
                    ]
                }),
                (0, r.jsx)(d.hzk, {
                    className: o()(C.content, k.container, {}),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, r.jsxs)('div', {
                        tabIndex: 0,
                        role: 'region',
                        'aria-label': x.intl.string(x.t.HzBchI),
                        children: [
                            this.renderVideo(),
                            R(e.body, !1, {
                                changeLog: this,
                                interpolations: S,
                                onLinkClick: this.trackLinkClick
                            })
                        ]
                    })
                }),
                (0, r.jsx)(d.mzw, {
                    direction: _.Z.Direction.HORIZONTAL,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'scrollerRef', i.createRef()),
            E(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, n;
                    null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e);
                }
            }),
            E(this, 'trackLinkClick', (e) => {
                this.props.track(
                    f.rMx.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: 'inline_link',
                        target: e
                    },
                    !1
                );
            }),
            E(this, 'renderHeader', () => {
                let { changeLog: e } = this.props;
                return (0, r.jsxs)(_.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-lg/semibold',
                            children: x.intl.string(x.t.LRmNAg)
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            className: k.date,
                            children: x.intl.format(x.t.Fb8xx8, { date: null != e.date && '' !== e.date ? l()(e.date).toDate() : new Date() })
                        })
                    ]
                });
            });
    }
}
let y = v;
