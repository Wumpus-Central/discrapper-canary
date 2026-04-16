"use strict";
l.d(t, { A: () => C });
var a = l(627968),
    s = l(64700),
    n = l(989349),
    r = l.n(n),
    o = l(158954),
    i = l(397927),
    c = l(871751),
    u = l(259407),
    d = l(607470),
    p = l(472501),
    h = l(46054),
    m = l(652176),
    g = l(550997),
    f = l(652215),
    _ = l(985018),
    x = l(614099);
let b = h.A.reactParserFor(g.default.getDefaultRules(x)),
    k = {};
class A extends s.PureComponent {
    scrollerRef = s.createRef();
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        null != e && this.props.onScroll?.(e);
    };
    track(e, t, l) {
        this.props.track(e, t, l);
    }
    trackLinkClick = (e) => {
        this.props.track(f.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: e }, !1);
    };
    renderFooter() {
        return (0, a.jsxs)("div", {
            className: x.footer,
            children: [
                (0, a.jsx)(i.MzZ, {
                    "aria-label": _.intl.string(_.t["/84uiD"]),
                    className: x.socialLink,
                    href: (0, p.A)(f.Pq7.TWITTER),
                    target: "blank",
                    children: (0, a.jsx)(i.p3p, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(i.MzZ, {
                    "aria-label": _.intl.string(_.t["h0or/l"]),
                    className: x.socialLink,
                    href: f.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, a.jsx)(i.Zc1, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(i.MzZ, {
                    "aria-label": _.intl.string(_.t["5uVPyf"]),
                    className: x.socialLink,
                    href: f.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, a.jsx)(i.LyU, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(i.Text, { variant: "text-xs/normal", children: _.intl.string(_.t.EjVVI7) }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            s = e.video,
            n = e.image;
        if (null != t && "" !== t)
            return (0, a.jsx)(c.rr, {
                className: x.video,
                allowFullScreen: !1,
                href: `https://youtu.be/${t}`,
                thumbnail: { url: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`, width: 432, height: 240 },
                video: {
                    url: `https://www.youtube.com/embed/${t}?vq=large&rel=0&controls=0&showinfo=0&pageType=${f.NzX}`,
                    width: 432,
                    height: 240,
                },
                provider: u.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: m.$o,
                renderImageComponent: m.LL,
                renderLinkComponent: m.bU,
                onPlay: () => {
                    this.track(f.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != s && "" !== s) {
            let e = s.startsWith("https://") ? s : l(274516)(`./${s}`);
            return (0, a.jsx)(d.A, {
                src: e,
                poster: n,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: x.video,
                onPlay: () => {
                    this.track(f.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == n || "" === n) return null;
        {
            let e = n.startsWith("https://") ? n : l(274516)(`./${n}`);
            return (0, a.jsx)("img", { className: x.image, alt: "", src: e, width: 432, height: 240 });
        }
    }
    render() {
        let { changeLog: e, onScroll: t, track: l, ...s } = this.props;
        return (0, a.jsx)(o.Modal, {
            ...s,
            title: _.intl.string(_.t.LRmNAl),
            subtitle: _.intl.format(_.t.Fb8xx2, {
                date: null != e.date && "" !== e.date ? r()(e.date).toDate() : new Date(),
            }),
            actions: [],
            actionBarInput: this.renderFooter(),
            onClose: () => Promise.resolve(this.props.onClose()),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: (0, a.jsxs)("div", {
                tabIndex: 0,
                role: "region",
                "aria-label": _.intl.string(_.t.HzBchE),
                className: x.container,
                children: [
                    this.renderVideo(),
                    b(e.body, !1, {
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
