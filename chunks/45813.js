"use strict";
l.d(t, { A: () => C });
var a = l(627968),
    n = l(64700),
    r = l(989349),
    s = l.n(r),
    i = l(158954),
    o = l(397927),
    d = l(871751),
    c = l(259407),
    u = l(607470),
    _ = l(472501),
    m = l(46054),
    h = l(652176),
    p = l(550997),
    g = l(652215),
    b = l(985018),
    f = l(903957);
let x = m.A.reactParserFor(p.default.getDefaultRules(f)),
    k = {};
class A extends n.PureComponent {
    scrollerRef = n.createRef();
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        null != e && this.props.onScroll?.(e);
    };
    track(e, t, l) {
        this.props.track(e, t, l);
    }
    trackLinkClick = (e) => {
        this.props.track(g.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: e }, !1);
    };
    renderFooter() {
        return (0, a.jsxs)("div", {
            className: f.footer,
            children: [
                (0, a.jsx)(o.MzZ, {
                    "aria-label": b.intl.string(b.t["/84uiD"]),
                    className: f.socialLink,
                    href: (0, _.A)(g.Pq7.TWITTER),
                    target: "blank",
                    children: (0, a.jsx)(o.p3p, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(o.MzZ, {
                    "aria-label": b.intl.string(b.t["h0or/l"]),
                    className: f.socialLink,
                    href: g.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, a.jsx)(o.Zc1, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(o.MzZ, {
                    "aria-label": b.intl.string(b.t["5uVPyf"]),
                    className: f.socialLink,
                    href: g.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, a.jsx)(o.LyU, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(o.Text, { variant: "text-xs/normal", children: b.intl.string(b.t.EjVVI7) }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            n = e.video,
            r = e.image;
        if (null != t && "" !== t)
            return (0, a.jsx)(d.rr, {
                className: f.video,
                allowFullScreen: !1,
                href: `https://youtu.be/${t}`,
                thumbnail: { url: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`, width: 432, height: 240 },
                video: {
                    url: `https://www.youtube.com/embed/${t}?vq=large&rel=0&controls=0&showinfo=0&pageType=${g.NzX}`,
                    width: 432,
                    height: 240,
                },
                provider: c.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: h.$o,
                renderImageComponent: h.LL,
                renderLinkComponent: h.bU,
                onPlay: () => {
                    this.track(g.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != n && "" !== n) {
            let e = n.startsWith("https://") ? n : l(274516)(`./${n}`);
            return (0, a.jsx)(u.A, {
                src: e,
                poster: r,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: f.video,
                onPlay: () => {
                    this.track(g.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == r || "" === r) return null;
        {
            let e = r.startsWith("https://") ? r : l(274516)(`./${r}`);
            return (0, a.jsx)("img", { className: f.image, alt: "", src: e, width: 432, height: 240 });
        }
    }
    render() {
        let { changeLog: e, onScroll: t, track: l, ...n } = this.props;
        return (0, a.jsx)(i.Modal, {
            ...n,
            title: b.intl.string(b.t.LRmNAl),
            subtitle: b.intl.format(b.t.Fb8xx2, {
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
                "aria-label": b.intl.string(b.t.HzBchE),
                className: f.container,
                children: [
                    this.renderVideo(),
                    x(e.body, !1, {
                        changeLog: this,
                        interpolations: k,
                        onLinkClick: this.trackLinkClick,
                        allowList: !0,
                    }),
                ],
            }),
        });
    }
}
let C = A;
