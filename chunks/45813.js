"use strict";
l.d(t, { A: () => y });
var i = l(627968),
    r = l(64700),
    n = l(989349),
    a = l.n(n),
    s = l(189213),
    o = l(349288),
    c = l(274997),
    d = l(319745),
    u = l(488225),
    _ = l(834730),
    h = l(871751),
    p = l(259407),
    m = l(607470),
    g = l(472501),
    f = l(46054),
    A = l(652176),
    b = l(550997),
    v = l(652215),
    E = l(985018),
    x = l(614099);
let I = f.A.reactParserFor(b.default.getDefaultRules(x)),
    C = {};
class T extends r.PureComponent {
    scrollerRef = r.createRef();
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        null != e && this.props.onScroll?.(e);
    };
    track(e, t, l) {
        this.props.track(e, t, l);
    }
    trackLinkClick = (e) => {
        this.props.track(v.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: e }, !1);
    };
    renderFooter() {
        return (0, i.jsxs)("div", {
            className: x.footer,
            children: [
                (0, i.jsx)(o.Anchor, {
                    "aria-label": E.intl.string(E.t["/84uiD"]),
                    className: x.socialLink,
                    href: (0, g.A)(v.Pq7.TWITTER),
                    target: "blank",
                    children: (0, i.jsx)(c.p, { size: "xs", color: "currentColor" }),
                }),
                (0, i.jsx)(o.Anchor, {
                    "aria-label": E.intl.string(E.t["h0or/l"]),
                    className: x.socialLink,
                    href: v.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, i.jsx)(d.Z, { size: "xs", color: "currentColor" }),
                }),
                (0, i.jsx)(o.Anchor, {
                    "aria-label": E.intl.string(E.t["5uVPyf"]),
                    className: x.socialLink,
                    href: v.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, i.jsx)(u.L, { size: "xs", color: "currentColor" }),
                }),
                (0, i.jsx)(_.E, { variant: "text-xs/normal", children: E.intl.string(E.t.EjVVI7) }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            r = e.video,
            n = e.image;
        if (null != t && "" !== t)
            return (0, i.jsx)(h.rr, {
                className: x.video,
                allowFullScreen: !1,
                href: `https://youtu.be/${t}`,
                thumbnail: { url: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`, width: 432, height: 240 },
                video: {
                    url: `https://www.youtube.com/embed/${t}?vq=large&rel=0&controls=0&showinfo=0&pageType=${v.NzX}`,
                    width: 432,
                    height: 240,
                },
                provider: p.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: A.$o,
                renderImageComponent: A.LL,
                renderLinkComponent: A.bU,
                onPlay: () => {
                    this.track(v.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != r && "" !== r) {
            let e = r.startsWith("https://") ? r : l(274516)(`./${r}`);
            return (0, i.jsx)(m.A, {
                src: e,
                poster: n,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: x.video,
                onPlay: () => {
                    this.track(v.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == n || "" === n) return null;
        {
            let e = n.startsWith("https://") ? n : l(274516)(`./${n}`);
            return (0, i.jsx)("img", { className: x.image, alt: "", src: e, width: 432, height: 240 });
        }
    }
    render() {
        let { changeLog: e, onScroll: t, track: l, ...r } = this.props;
        return (0, i.jsx)(s.Modal, {
            ...r,
            title: E.intl.string(E.t.LRmNAl),
            subtitle: E.intl.format(E.t.Fb8xx2, {
                date: null != e.date && "" !== e.date ? a()(e.date).toDate() : new Date(),
            }),
            actions: [],
            actionBarInput: this.renderFooter(),
            onClose: () => Promise.resolve(this.props.onClose()),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: (0, i.jsxs)("div", {
                tabIndex: 0,
                role: "region",
                "aria-label": E.intl.string(E.t.HzBchE),
                className: x.container,
                children: [
                    this.renderVideo(),
                    I(e.body, !1, {
                        changeLog: this,
                        interpolations: C,
                        onLinkClick: this.trackLinkClick,
                        allowList: !0,
                    }),
                ],
            }),
        });
    }
}
let y = T;
