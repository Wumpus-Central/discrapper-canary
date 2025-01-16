n(47120);
var l = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(913527),
    s = n.n(i),
    c = n(481060),
    d = n(446411),
    h = n(468846),
    u = n(600164),
    g = n(70097),
    m = n(299379),
    x = n(454585),
    p = n(524444),
    f = n(55406),
    C = n(981631),
    j = n(388032),
    k = n(617768),
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
let N = x.Z.reactParserFor(f.Z.getDefaultRules(k)),
    _ = {};
class b extends r.PureComponent {
    track(e, t, n) {
        this.props.track(e, t, n);
    }
    renderFooter() {
        return (0, l.jsxs)('div', {
            className: k.footer,
            children: [
                (0, l.jsx)(c.Anchor, {
                    'aria-label': j.intl.string(j.t['/84uiI']),
                    className: k.socialLink,
                    href: (0, m.Z)(C.RK.TWITTER),
                    target: 'blank',
                    children: (0, l.jsx)(c.XNeutralIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, l.jsx)(c.Anchor, {
                    'aria-label': j.intl.string(j.t['h0or/v']),
                    className: k.socialLink,
                    href: C.fK7.FACEBOOK_URL,
                    target: 'blank',
                    children: (0, l.jsx)(c.FacebookNeutralIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, l.jsx)(c.Anchor, {
                    'aria-label': j.intl.string(j.t['5uVPyc']),
                    className: k.socialLink,
                    href: C.fK7.INSTAGRAM_URL,
                    target: 'blank',
                    children: (0, l.jsx)(c.InstagramNeutralIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
                (0, l.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    children: j.intl.string(j.t.EjVVIy)
                })
            ]
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            r = e.video,
            o = e.image;
        if (null != t && '' !== t)
            return (0, l.jsx)(d.BC, {
                className: a()(k.video),
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
                provider: h.pn.YOUTUBE,
                maxWidth: 451,
                maxHeight: 254,
                renderVideoComponent: p.lV,
                renderImageComponent: p.Yi,
                renderLinkComponent: p.iT,
                onPlay: () => {
                    this.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                }
            });
        if (null != r && '' !== r) {
            let e = r.startsWith('https://') ? r : n(595173)('./'.concat(r));
            return (0, l.jsx)(g.Z, {
                src: e,
                poster: o,
                width: 451,
                height: 254,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: k.video,
                onPlay: () => {
                    this.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                }
            });
        }
        if (null == o || '' === o) return null;
        else {
            let e = o.startsWith('https://') ? o : n(595173)('./'.concat(o));
            return (0, l.jsx)('img', {
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
        return (0, l.jsxs)(c.ModalRoot, {
            transitionState: c.ModalTransitionState.ENTERED,
            className: E.modal,
            children: [
                (0, l.jsxs)(c.ModalHeader, {
                    align: u.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        this.renderHeader(),
                        (0, l.jsx)(u.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(c.ModalCloseButton, { onClick: this.props.onClose })
                        })
                    ]
                }),
                (0, l.jsx)(c.ModalContent, {
                    className: a()(E.content, k.container, {}),
                    scrollerRef: this.scrollerRef,
                    onScroll: this.handleScroll,
                    children: (0, l.jsxs)('div', {
                        tabIndex: 0,
                        role: 'region',
                        'aria-label': j.intl.string(j.t.HzBchI),
                        children: [
                            this.renderVideo(),
                            N(e.body, !1, {
                                changeLog: this,
                                interpolations: _,
                                onLinkClick: this.trackLinkClick
                            })
                        ]
                    })
                }),
                (0, l.jsx)(c.ModalFooter, {
                    direction: u.Z.Direction.HORIZONTAL,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'scrollerRef', r.createRef()),
            S(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, n;
                    null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e);
                }
            }),
            S(this, 'trackLinkClick', (e) => {
                this.props.track(
                    C.rMx.CHANGE_LOG_CTA_CLICKED,
                    {
                        cta_type: 'inline_link',
                        target: e
                    },
                    !1
                );
            }),
            S(this, 'renderHeader', () => {
                let { changeLog: e } = this.props;
                return (0, l.jsxs)(u.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, l.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            children: j.intl.string(j.t.LRmNAg)
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            className: k.date,
                            children: j.intl.format(j.t.Fb8xx8, { date: null != e.date && '' !== e.date ? s()(e.date).toDate() : new Date() })
                        })
                    ]
                });
            });
    }
}
t.Z = b;
