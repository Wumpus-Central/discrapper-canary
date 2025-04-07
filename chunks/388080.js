r.d(t, { Z: () => S }), r(388685);
var n = r(200651),
    o = r(192379),
    i = r(120356),
    a = r.n(i),
    s = r(913527),
    l = r.n(s),
    c = r(481060),
    d = r(446411),
    u = r(468846),
    p = r(600164),
    m = r(70097),
    b = r(299379),
    _ = r(454585),
    g = r(524444),
    h = r(55406),
    f = r(981631),
    y = r(388032),
    x = r(875231),
    O = r(321250);
function k(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let j = _.Z.reactParserFor(h.default.getDefaultRules(x)),
    C = {};
class v extends o.PureComponent {
    track(e, t, r) {
        this.props.track(e, t, r);
    }
    renderFooter() {
        return (0, n.jsxs)('div', {
            className: x.footer,
            children: [
                (0, n.jsx)(c.eee, {
                    'aria-label': y.NW.string(y.t['/84uiI']),
                    className: x.socialLink,
                    href: (0, b.Z)(f.RK.TWITTER),
                    target: 'blank',
                    children: (0, n.jsx)(c.TAi, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, n.jsx)(c.eee, {
                    'aria-label': y.NW.string(y.t['h0or/v']),
                    className: x.socialLink,
                    href: f.fK7.FACEBOOK_URL,
                    target: 'blank',
                    children: (0, n.jsx)(c.tdR, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, n.jsx)(c.eee, {
                    'aria-label': y.NW.string(y.t['5uVPyc']),
                    className: x.socialLink,
                    href: f.fK7.INSTAGRAM_URL,
                    target: 'blank',
                    children: (0, n.jsx)(c.gST, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, n.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    children: y.NW.string(y.t.EjVVIy)
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
            return (0, n.jsx)(d.BC, {
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
            let e = o.startsWith('https://') ? o : r(595173)('./'.concat(o));
            return (0, n.jsx)(m.Z, {
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
            let e = i.startsWith('https://') ? i : r(595173)('./'.concat(i));
            return (0, n.jsx)('img', {
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
        return (0, n.jsxs)(c.Y0X, {
            transitionState: c.Dvm.ENTERED,
            className: O.modal,
            children: [
                (0, n.jsxs)(c.xBx, {
                    align: p.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        this.renderHeader(),
                        (0, n.jsx)(p.Z.Child, {
                            grow: 0,
                            children: (0, n.jsx)(c.olH, { onClick: this.props.onClose })
                        })
                    ]
                }),
                (0, n.jsx)(c.hzk, {
                    className: a()(O.content, x.container, {}),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, n.jsxs)('div', {
                        tabIndex: 0,
                        role: 'region',
                        'aria-label': y.NW.string(y.t.HzBchI),
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
                (0, n.jsx)(c.mzw, {
                    direction: p.Z.Direction.HORIZONTAL,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'scrollerRef', o.createRef()),
            k(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, r;
                    null == (t = (r = this.props).onScroll) || t.call(r, e);
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
                return (0, n.jsxs)(p.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            children: y.NW.string(y.t.LRmNAg)
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            className: x.date,
                            children: y.NW.format(y.t.Fb8xx8, { date: null != e.date && '' !== e.date ? l()(e.date).toDate() : new Date() })
                        })
                    ]
                });
            });
    }
}
let S = v;
