"use strict";
l.d(t, { default: () => D });
var a = l(627968),
    n = l(64700),
    r = l(189213),
    s = l(450507),
    i = l(192308),
    o = l(256311),
    d = l(954571),
    c = l(702841),
    u = l(773669),
    _ = l(883600),
    m = l(559868);
function p(e, t) {
    let {
        changelog: l,
        loadState: a,
        defaultChangelog: r,
        defaultLoadState: s,
    } = (0, c.cf)([_.A], () => {
        let l = null != e ? _.A.getChangelog(e, t) : null,
            a = null != e ? _.A.getChangelog(e, "en-US") : null,
            n = null != e && _.A.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: l,
            loadState: null != e && _.A.getChangelogLoadStatus(e, t),
            defaultChangelog: a,
            defaultLoadState: n,
        };
    }, [e, t]);
    return (n.useEffect(() => {
        null != e && null == l && a === m._f.NOT_LOADED && o.A.fetchChangelog(e, t);
    }, [e, l, a, t]),
    null == e)
        ? { id: e, changelog: null, loaded: !1 }
        : null == l && a === m._f.LOADED_FAILURE
          ? { id: e, changelog: r, loaded: s !== m._f.NOT_LOADED }
          : { id: e, changelog: l, loaded: a !== m._f.NOT_LOADED };
}
var h = l(989349),
    g = l.n(h),
    f = l(349288),
    b = l(274997),
    A = l(319745),
    x = l(488225),
    v = l(834730),
    C = l(175671),
    y = l(259407),
    E = l(607470),
    k = l(472501),
    w = l(46054),
    I = l(34337),
    L = l(550997),
    R = l(652215),
    N = l(985018),
    j = l(614099);
let T = w.A.reactParserFor(L.default.getDefaultRules(j)),
    S = {};
class O extends n.PureComponent {
    scrollerRef = n.createRef();
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        null != e && this.props.onScroll?.(e);
    };
    track(e, t, l) {
        this.props.track(e, t, l);
    }
    trackLinkClick = (e) => {
        this.props.track(R.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "inline_link", target: e }, !1);
    };
    renderFooter() {
        return (0, a.jsxs)("div", {
            className: j.footer,
            children: [
                (0, a.jsx)(f.Anchor, {
                    "aria-label": N.intl.string(N.t["/84uiD"]),
                    className: j.socialLink,
                    href: (0, k.A)(R.Pq7.TWITTER),
                    target: "blank",
                    children: (0, a.jsx)(b.p, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(f.Anchor, {
                    "aria-label": N.intl.string(N.t["h0or/l"]),
                    className: j.socialLink,
                    href: R.w7I.FACEBOOK_URL,
                    target: "blank",
                    children: (0, a.jsx)(A.Z, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(f.Anchor, {
                    "aria-label": N.intl.string(N.t["5uVPyf"]),
                    className: j.socialLink,
                    href: R.w7I.INSTAGRAM_URL,
                    target: "blank",
                    children: (0, a.jsx)(x.L, { size: "xs", color: "currentColor" }),
                }),
                (0, a.jsx)(v.E, { variant: "text-xs/normal", children: N.intl.string(N.t.EjVVI7) }),
            ],
        });
    }
    renderVideo() {
        let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            n = e.video,
            r = e.image;
        if (null != t && "" !== t)
            return (0, a.jsx)(C.rr, {
                className: j.video,
                allowFullScreen: !1,
                href: `https://youtu.be/${t}`,
                thumbnail: { url: `https://i.ytimg.com/vi/${t}/hqdefault.jpg`, width: 432, height: 240 },
                video: {
                    url: `https://www.youtube.com/embed/${t}?vq=large&rel=0&controls=0&showinfo=0&pageType=${R.NzX}`,
                    width: 432,
                    height: 240,
                },
                provider: y.mt.YOUTUBE,
                maxWidth: 432,
                maxHeight: 240,
                renderVideoComponent: I.$o,
                renderImageComponent: I.LL,
                renderLinkComponent: I.bU,
                onPlay: () => {
                    this.track(R.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        if (null != n && "" !== n) {
            let e = n.startsWith("https://") ? n : l(274516)(`./${n}`);
            return (0, a.jsx)(E.A, {
                src: e,
                poster: r,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: j.video,
                onPlay: () => {
                    this.track(R.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
                },
            });
        }
        if (null == r || "" === r) return null;
        {
            let e = r.startsWith("https://") ? r : l(274516)(`./${r}`);
            return (0, a.jsx)("img", { className: j.image, alt: "", src: e, width: 432, height: 240 });
        }
    }
    render() {
        let { changeLog: e, onScroll: t, track: l, ...n } = this.props;
        return (0, a.jsx)(r.Modal, {
            ...n,
            title: N.intl.string(N.t.LRmNAl),
            subtitle: N.intl.format(N.t.Fb8xx2, {
                date: null != e.date && "" !== e.date ? g()(e.date).toDate() : new Date(),
            }),
            actions: [],
            actionBarInput: this.renderFooter(),
            onClose: () => Promise.resolve(this.props.onClose()),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: (0, a.jsxs)("div", {
                tabIndex: 0,
                role: "region",
                "aria-label": N.intl.string(N.t.HzBchE),
                className: j.container,
                children: [
                    this.renderVideo(),
                    T(e.body, !1, {
                        changeLog: this,
                        interpolations: S,
                        onLinkClick: this.trackLinkClick,
                        allowList: !0,
                    }),
                ],
            }),
        });
    }
}
class M extends n.PureComponent {
    maxScrolledPercentage = 0;
    mountedAt = 0;
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(R.HAw.CHANGE_LOG_OPENED, {}, !0);
    }
    close = () => ((0, i.closeModal)(m.lb), Promise.resolve());
    handleScroll = (e) => {
        let { offsetHeight: t, scrollHeight: l, scrollTop: a } = e.getScrollerState();
        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, a / (l - t)), 1);
    };
    track = (() => {
        var e = this;
        return function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                { changeLog: n } = e.props,
                { date: r, revision: s } = n,
                i = { change_log_id: `${r}:${s}`, ...l };
            a ||
                (i = {
                    seconds_open: Math.round((Date.now() - e.mountedAt) / 1e3),
                    max_scrolled_percentage: 100 * parseInt(e.maxScrolledPercentage.toPrecision(4), 10),
                    ...i,
                }),
                d.default.track(t, i);
        };
    })();
    componentWillUnmount() {
        this.track(R.HAw.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, a.jsx)(O, {
            ...this.props,
            changeLog: this.props.changeLog,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track,
        });
    }
}
function D(e) {
    let {
        changelog: t,
        loaded: l,
        clientTooOld: i,
    } = (function () {
        let e = (0, c.bG)([u.default], () => u.default.locale),
            t = (0, c.bG)([_.A], () => _.A.latestChangelogId()),
            l = (0, c.bG)([_.A], () => _.A.getConfig()),
            a = null != l && 0 === Object.keys(l).length,
            n = null != l && Object.keys(l).length > 0 && null == t,
            r = (0, c.bG)([_.A], () => _.A.overrideId()),
            { changelog: s, loaded: i } = p(t, e),
            { changelog: o, loaded: d } = p(r, e);
        return null == r || (null == o && d)
            ? { id: t, changelog: s, loaded: !!a || i, clientTooOld: n }
            : { id: r, changelog: o, loaded: d, clientTooOld: !1 };
    })();
    if (
        (n.useEffect(() => {
            if (l && null != t) return () => o.A.markChangelogAsSeen(t.id, t.date);
        }, [l, t]),
        i)
    )
        return (0, a.jsx)(r.Modal, {
            title: N.intl.string(N.t.V9ospk),
            actions: [{ text: N.intl.string(N.t.BddRzS), onClick: e.onClose }],
            ...e,
        });
    if (null == t)
        if (l)
            return (0, a.jsx)(r.Modal, {
                title: N.intl.string(N.t.O1iRT8),
                actions: [{ text: N.intl.string(N.t.BddRzS), onClick: e.onClose }],
                ...e,
            });
        else return (0, s.A)(e);
    return (0, a.jsx)(M, { ...e, changeLog: t });
}
