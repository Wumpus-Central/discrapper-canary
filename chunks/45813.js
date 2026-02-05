l.d(t, { A: () => j });
var n = l(627968),
    d = l(64700),
    a = l(989349),
    r = l.n(a),
    o = l(158954),
    i = l(397927),
    s = l(871751),
    c = l(259407),
    _ = l(607470),
    m = l(472501),
    h = l(46054),
    u = l(652176),
    g = l(550997),
    b = l(652215),
    p = l(985018),
    x = l(903957);
let f = h.A.reactParserFor(g.default.getDefaultRules(x)),
    A = {};
class C extends d.PureComponent {
    scrollerRef = d.createRef();
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        null != e && this.props.onScroll?.(e);
    };
    track(e, t, l) {
        this.props.track(e, t, l);
    }
    trackLinkClick = (e) => {
        this.props.track(b.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: e }, !1);
    };
    renderFooter() {
        return (0, n.jsxs)("div", {
            className: x.footer,
            children: [
                (0, n.jsx)(i.MzZ, {
                    "aria-label": p.intl.string(p.t["/84uiD"]),
                    className: x.socialLink,
                    href: (0, m.A)(b.Pq7.TWITTER),
                    target: "blank",
                    children: (0, n.jsx)(i.p3p, { size: "xs", color: "currentColor" }),
                }),
                (0, n.jsx)(i.MzZ, {
                    "aria-label": p.intl.string(p.t["h0or/l"]),
                    className: x.socialLink,
                    href: b.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, n.jsx)(i.Zc1, { size: "xs", color: "currentColor" }),
                }),
                (0, n.jsx)(i.MzZ, {
                    "aria-label": p.intl.string(p.t["5uVPyf"]),
                    className: x.socialLink,
                    href: b.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, n.jsx)(i.LyU, { size: "xs", color: "currentColor" }),
                }),
                (0, n.jsx)(i.Text, { variant: "text-xs/normal", children: p.intl.string(p.t.EjVVI7) }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            d = e.video,
            a = e.image;
        if (null != t && "" !== t)
            return (0, n.jsx)(s.rr, {
                className: x.video,
                allowFullScreen: !1,
                href: `https://youtu.be/${t}`,
                thumbnail: { url: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`, width: 432, height: 240 },
                video: {
                    url: `https://www.youtube.com/embed/${t}?vq=large&rel=0&controls=0&showinfo=0`,
                    width: 432,
                    height: 240,
                },
                provider: c.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: u.$o,
                renderImageComponent: u.LL,
                renderLinkComponent: u.bU,
                onPlay: () => {
                    this.track(b.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != d && "" !== d) {
            let e = d.startsWith("https://") ? d : l(274516)(`./${d}`);
            return (0, n.jsx)(_.A, {
                src: e,
                poster: a,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: x.video,
                onPlay: () => {
                    this.track(b.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == a || "" === a) return null;
        {
            let e = a.startsWith("https://") ? a : l(274516)(`./${a}`);
            return (0, n.jsx)("img", { className: x.image, alt: "", src: e, width: 432, height: 240 });
        }
    }
    render() {
        let { changeLog: e, onScroll: t, track: l, ...d } = this.props;
        return (0, n.jsx)(o.Modal, {
            ...d,
            title: p.intl.string(p.t.LRmNAl),
            subtitle: p.intl.format(p.t.Fb8xx2, {
                date: null != e.date && "" !== e.date ? r()(e.date).toDate() : new Date(),
            }),
            actions: [],
            actionBarInput: this.renderFooter(),
            onClose: () => Promise.resolve(this.props.onClose()),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: (0, n.jsxs)("div", {
                tabIndex: 0,
                role: "region",
                "aria-label": p.intl.string(p.t.HzBchE),
                children: [
                    this.renderVideo(),
                    f(e.body, !1, { changeLog: this, interpolations: A, onLinkClick: this.trackLinkClick }),
                ],
            }),
        });
    }
}
let j = C;
