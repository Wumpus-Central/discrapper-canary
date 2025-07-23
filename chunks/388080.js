(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    a = n.n(i),
    l = n(913527),
    s = n.n(l),
    c = n(481060),
    d = n(446411),
    u = n(468846),
    p = n(600164),
    m = n(70097),
    _ = n(299379),
    b = n(454585),
    g = n(524444),
    h = n(55406),
    f = n(981631),
    y = n(388032),
    x = n(875231),
    O = n(321250);
function k(e, t, n) {
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
let j = b.Z.reactParserFor(h.default.getDefaultRules(x)),
    C = {};
class v extends o.PureComponent {
    track(e, t, n) {
        this.props.track(e, t, n);
    }
    renderFooter() {
        return (0, r.jsxs)('div', {
            className: x.footer,
            children: [
                (0, r.jsx)(c.eee, {
                    'aria-label': y.intl.string(y.t['/84uiI']),
                    className: x.socialLink,
                    href: (0, _.Z)(f.RK.TWITTER),
                    target: 'blank',
                    children: (0, r.jsx)(c.TAi, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(c.eee, {
                    'aria-label': y.intl.string(y.t['h0or/v']),
                    className: x.socialLink,
                    href: f.fK7.FACEBOOK_URL,
                    target: 'blank',
                    children: (0, r.jsx)(c.tdR, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(c.eee, {
                    'aria-label': y.intl.string(y.t['5uVPyc']),
                    className: x.socialLink,
                    href: f.fK7.INSTAGRAM_URL,
                    target: 'blank',
                    children: (0, r.jsx)(c.gST, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    children: y.intl.string(y.t.EjVVIy)
                })
            ]
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            o = e.video,
            i = e.image;
        if (null != t && '' !== t)
            return (0, r.jsx)(d.BC, {
                className: x.video,
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
        if (null != o && '' !== o) {
            let e = o.startsWith('https://') ? o : n(595173)('./'.concat(o));
            return (0, r.jsx)(m.Z, {
                src: e,
                poster: i,
                width: 451,
                height: 254,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: x.video,
                onPlay: () => {
                    this.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                }
            });
        }
        if (null == i || '' === i) return null;
        {
            let e = i.startsWith('https://') ? i : n(595173)('./'.concat(i));
            return (0, r.jsx)('img', {
                className: x.image,
                alt: '',
                src: e,
                width: 451,
                height: 254
            });
        }
    }
    render() {
        let { changeLog: e } = this.props;
        return (0, r.jsxs)(c.Y0X, {
            transitionState: c.Dvm.ENTERED,
            className: O.modal,
            parentComponent: 'ChangelogStandardTemplate',
            children: [
                (0, r.jsxs)(c.xBx, {
                    align: p.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        this.renderHeader(),
                        (0, r.jsx)(p.Z.Child, {
                            grow: 0,
                            children: (0, r.jsx)(c.olH, { onClick: this.props.onClose })
                        })
                    ]
                }),
                (0, r.jsx)(c.hzk, {
                    className: a()(O.content, x.container, {}),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, r.jsxs)('div', {
                        tabIndex: 0,
                        role: 'region',
                        'aria-label': y.intl.string(y.t.HzBchI),
                        children: [
                            this.renderVideo(),
                            j(e.body, !1, {
                                changeLog: this,
                                interpolations: C,
                                onLinkClick: this.trackLinkClick
                            })
                        ]
                    })
                }),
                (0, r.jsx)(c.mzw, {
                    direction: p.Z.Direction.HORIZONTAL,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            k(this, 'scrollerRef', o.createRef()),
            k(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, n;
                    null == (t = (n = this.props).onScroll) || t.call(n, e);
                }
            }),
            k(this, 'trackLinkClick', (e) => {
                this.props.track(
                    f.rMx.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: 'inline_link',
                        target: e
                    },
                    !1
                );
            }),
            k(this, 'renderHeader', () => {
                let { changeLog: e } = this.props;
                return (0, r.jsxs)(p.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            children: y.intl.string(y.t.LRmNAg)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            className: x.date,
                            children: y.intl.format(y.t.Fb8xx8, { date: null != e.date && '' !== e.date ? s()(e.date).toDate() : new Date() })
                        })
                    ]
                });
            }));
    }
}
let S = v;
