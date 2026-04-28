l.d(t, { default: () => G });
var n = l(627968),
    r = l(64700),
    o = l(189213),
    a = l(450507),
    i = l(192308),
    s = l(256311),
    c = l(954571),
    d = l(702841),
    h = l(773669),
    u = l(883600),
    g = l(559868);
function p(e, t) {
    let {
        changelog: l,
        loadState: n,
        defaultChangelog: o,
        defaultLoadState: a,
    } = (0, d.cf)([u.A], () => {
        let l = null != e ? u.A.getChangelog(e, t) : null,
            n = null != e ? u.A.getChangelog(e, "en-US") : null,
            r = null != e && u.A.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: l,
            loadState: null != e && u.A.getChangelogLoadStatus(e, t),
            defaultChangelog: n,
            defaultLoadState: r,
        };
    }, [e, t]);
    return (r.useEffect(() => {
        null != e && null == l && n === g._f.NOT_LOADED && s.A.fetchChangelog(e, t);
    }, [e, l, n, t]),
    null == e)
        ? { id: e, changelog: null, loaded: !1 }
        : null == l && n === g._f.LOADED_FAILURE
          ? { id: e, changelog: o, loaded: a !== g._f.NOT_LOADED }
          : { id: e, changelog: l, loaded: n !== g._f.NOT_LOADED };
}
var m = l(989349),
    A = l.n(m),
    f = l(349288),
    C = l(274997),
    k = l(319745),
    x = l(488225),
    _ = l(834730),
    L = l(175671),
    E = l(259407),
    b = l(607470),
    S = l(472501),
    O = l(46054),
    w = l(34337),
    D = l(550997),
    N = l(652215),
    j = l(985018),
    v = l(614099);
let I = O.A.reactParserFor(D.default.getDefaultRules(v)),
    P = {};
class R extends r.PureComponent {
    scrollerRef = r.createRef();
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        null != e && this.props.onScroll?.(e);
    };
    track(e, t, l) {
        this.props.track(e, t, l);
    }
    trackLinkClick = (e) => {
        this.props.track(N.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: e }, !1);
    };
    renderFooter() {
        return (0, n.jsxs)("div", {
            className: v.footer,
            children: [
                (0, n.jsx)(f.Anchor, {
                    "aria-label": j.intl.string(j.t["/84uiD"]),
                    className: v.socialLink,
                    href: (0, S.A)(N.Pq7.TWITTER),
                    target: "blank",
                    children: (0, n.jsx)(C.p, { size: "xs", color: "currentColor" }),
                }),
                (0, n.jsx)(f.Anchor, {
                    "aria-label": j.intl.string(j.t["h0or/l"]),
                    className: v.socialLink,
                    href: N.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, n.jsx)(k.Z, { size: "xs", color: "currentColor" }),
                }),
                (0, n.jsx)(f.Anchor, {
                    "aria-label": j.intl.string(j.t["5uVPyf"]),
                    className: v.socialLink,
                    href: N.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, n.jsx)(x.L, { size: "xs", color: "currentColor" }),
                }),
                (0, n.jsx)(_.E, { variant: "text-xs/normal", children: j.intl.string(j.t.EjVVI7) }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            r = e.video,
            o = e.image;
        if (null != t && "" !== t)
            return (0, n.jsx)(L.rr, {
                className: v.video,
                allowFullScreen: !1,
                href: `https://youtu.be/${t}`,
                thumbnail: { url: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`, width: 432, height: 240 },
                video: {
                    url: `https://www.youtube.com/embed/${t}?vq=large&rel=0&controls=0&showinfo=0&pageType=${N.NzX}`,
                    width: 432,
                    height: 240,
                },
                provider: E.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: w.$o,
                renderImageComponent: w.LL,
                renderLinkComponent: w.bU,
                onPlay: () => {
                    this.track(N.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != r && "" !== r) {
            let e = r.startsWith("https://") ? r : l(274516)(`./${r}`);
            return (0, n.jsx)(b.A, {
                src: e,
                poster: o,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: v.video,
                onPlay: () => {
                    this.track(N.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == o || "" === o) return null;
        {
            let e = o.startsWith("https://") ? o : l(274516)(`./${o}`);
            return (0, n.jsx)("img", { className: v.image, alt: "", src: e, width: 432, height: 240 });
        }
    }
    render() {
        let { changeLog: e, onScroll: t, track: l, ...r } = this.props;
        return (0, n.jsx)(o.Modal, {
            ...r,
            title: j.intl.string(j.t.LRmNAl),
            subtitle: j.intl.format(j.t.Fb8xx2, {
                date: null != e.date && "" !== e.date ? A()(e.date).toDate() : new Date(),
            }),
            actions: [],
            actionBarInput: this.renderFooter(),
            onClose: () => Promise.resolve(this.props.onClose()),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: (0, n.jsxs)("div", {
                tabIndex: 0,
                role: "region",
                "aria-label": j.intl.string(j.t.HzBchE),
                className: v.container,
                children: [
                    this.renderVideo(),
                    I(e.body, !1, {
                        changeLog: this,
                        interpolations: P,
                        onLinkClick: this.trackLinkClick,
                        allowList: !0,
                    }),
                ],
            }),
        });
    }
}
class T extends r.PureComponent {
    maxScrolledPercentage = 0;
    mountedAt = 0;
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(N.HAw.CHANGE_LOG_OPENED, {}, !0);
    }
    close = () => ((0, i.closeModal)(g.lb), Promise.resolve());
    handleScroll = (e) => {
        let { offsetHeight: t, scrollHeight: l, scrollTop: n } = e.getScrollerState();
        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (l - t)), 1);
    };
    track = (() => {
        var e = this;
        return function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                { changeLog: r } = e.props,
                { date: o, revision: a } = r,
                i = { change_log_id: `${o}:${a}`, ...l };
            n ||
                (i = {
                    seconds_open: Math.round((Date.now() - e.mountedAt) / 1e3),
                    max_scrolled_percentage: 100 * parseInt(e.maxScrolledPercentage.toPrecision(4), 10),
                    ...i,
                }),
                c.default.track(t, i);
        };
    })();
    componentWillUnmount() {
        this.track(N.HAw.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, n.jsx)(R, {
            ...this.props,
            changeLog: this.props.changeLog,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track,
        });
    }
}
function G(e) {
    let {
        changelog: t,
        loaded: l,
        clientTooOld: i,
    } = (function () {
        let e = (0, d.bG)([h.default], () => h.default.locale),
            t = (0, d.bG)([u.A], () => u.A.latestChangelogId()),
            l = (0, d.bG)([u.A], () => u.A.getConfig()),
            n = null != l && 0 === Object.keys(l).length,
            r = null != l && Object.keys(l).length > 0 && null == t,
            o = (0, d.bG)([u.A], () => u.A.overrideId()),
            { changelog: a, loaded: i } = p(t, e),
            { changelog: s, loaded: c } = p(o, e);
        return null == o || (null == s && c)
            ? { id: t, changelog: a, loaded: !!n || i, clientTooOld: r }
            : { id: o, changelog: s, loaded: c, clientTooOld: !1 };
    })();
    if (
        (r.useEffect(() => {
            if (l && null != t) return () => s.A.markChangelogAsSeen(t.id, t.date);
        }, [l, t]),
        i)
    )
        return (0, n.jsx)(o.Modal, {
            title: j.intl.string(j.t.V9ospk),
            actions: [{ text: j.intl.string(j.t.BddRzS), onClick: e.onClose }],
            ...e,
        });
    if (null == t)
        if (l)
            return (0, n.jsx)(o.Modal, {
                title: j.intl.string(j.t.O1iRT8),
                actions: [{ text: j.intl.string(j.t.BddRzS), onClick: e.onClose }],
                ...e,
            });
        else return (0, a.A)(e);
    return (0, n.jsx)(T, { ...e, changeLog: t });
}
