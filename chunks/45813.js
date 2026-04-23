"use strict";
l.d(t, { A: () => w });
var a = l(627968),
    n = l(64700),
    r = l(989349),
    s = l.n(r),
    i = l(189213),
    o = l(349288),
    d = l(274997),
    c = l(319745),
    u = l(488225),
    _ = l(834730),
    m = l(871751),
    p = l(259407),
    h = l(607470),
    g = l(472501),
    f = l(46054),
    b = l(652176),
    A = l(550997),
    x = l(652215),
    v = l(985018),
    C = l(614099);
let y = f.A.reactParserFor(A.default.getDefaultRules(C)),
    E = {};
class k extends n.PureComponent {
    scrollerRef = n.createRef();
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        null != e && this.props.onScroll?.(e);
    };
    track(e, t, l) {
        this.props.track(e, t, l);
    }
    trackLinkClick = (e) => {
        this.props.track(x.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: e }, !1);
    };
    renderFooter() {
        return (0, a.jsxs)("div", {
            className: C.footer,
            children: [
                (0, a.jsx)(o.Anchor, {
                    "aria-label": v.intl.string(v.t["/84uiD"]),
                    className: C.socialLink,
                    href: (0, g.A)(x.Pq7.TWITTER),
                    target: "blank",
                    children: (0, a.jsx)(d.p, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(o.Anchor, {
                    "aria-label": v.intl.string(v.t["h0or/l"]),
                    className: C.socialLink,
                    href: x.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, a.jsx)(c.Z, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(o.Anchor, {
                    "aria-label": v.intl.string(v.t["5uVPyf"]),
                    className: C.socialLink,
                    href: x.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, a.jsx)(u.L, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(_.E, { variant: "text-xs/normal", children: v.intl.string(v.t.EjVVI7) }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            n = e.video,
            r = e.image;
        if (null != t && "" !== t)
            return (0, a.jsx)(m.rr, {
                className: C.video,
                allowFullScreen: !1,
                href: `https://youtu.be/${t}`,
                thumbnail: { url: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`, width: 432, height: 240 },
                video: {
                    url: `https://www.youtube.com/embed/${t}?vq=large&rel=0&controls=0&showinfo=0&pageType=${x.NzX}`,
                    width: 432,
                    height: 240,
                },
                provider: p.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: b.$o,
                renderImageComponent: b.LL,
                renderLinkComponent: b.bU,
                onPlay: () => {
                    this.track(x.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != n && "" !== n) {
            let e = n.startsWith("https://") ? n : l(274516)(`./${n}`);
            return (0, a.jsx)(h.A, {
                src: e,
                poster: r,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: C.video,
                onPlay: () => {
                    this.track(x.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == r || "" === r) return null;
        {
            let e = r.startsWith("https://") ? r : l(274516)(`./${r}`);
            return (0, a.jsx)("img", { className: C.image, alt: "", src: e, width: 432, height: 240 });
        }
    }
    render() {
        let { changeLog: e, onScroll: t, track: l, ...n } = this.props;
        return (0, a.jsx)(i.Modal, {
            ...n,
            title: v.intl.string(v.t.LRmNAl),
            subtitle: v.intl.format(v.t.Fb8xx2, {
                date: null != e.date && "" !== e.date ? s()(e.date).toDate() : new Date(),
            }),
            actions: [],
            actionBarInput: this.renderFooter(),
            onClose: () => Promise.resolve(this.props.onClose()),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: (0, a.jsxs)("div", {
                tabIndex: 0,
                role: "region",
                "aria-label": v.intl.string(v.t.HzBchE),
                className: C.container,
                children: [
                    this.renderVideo(),
                    y(e.body, !1, {
                        changeLog: this,
                        interpolations: E,
                        onLinkClick: this.trackLinkClick,
                        allowList: !0,
                    }),
                ],
            }),
        });
    }
}
let w = k;
