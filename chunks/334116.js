n.d(t, { A: () => I });
var i = n(627968),
    a = n(73153),
    r = n(391973),
    l = n(272355),
    s = n(958005),
    o = n(268218),
    d = n(555528),
    c = n(574172),
    u = n(652215),
    A = n(644434);
n(314452);
let h = (0, o.Fe)({
        createPromise: () => n.e("71138").then(n.bind(n, 140539)),
        webpackId: 140539,
        name: "PopoutWindowChannelCall",
    }),
    _ = (0, o.Fe)({
        createPromise: () => n.e("36133").then(n.bind(n, 943472)),
        webpackId: 943472,
        name: "PopoutWindowCallTile",
    }),
    m = (0, o.Fe)({
        createPromise: () => n.e("36308").then(n.bind(n, 911315)),
        webpackId: 911315,
        name: "PopoutWindowStageChannelCall",
    }),
    p = (0, o.Fe)({
        createPromise: () => n.e("71138").then(n.bind(n, 414760)),
        webpackId: 414760,
        name: "PopoutWindowRTCDebug",
    }),
    g = (0, o.Fe)({
        createPromise: () => Promise.all([n.e("71447"), n.e("13492")]).then(n.bind(n, 860051)),
        webpackId: 860051,
        name: "PopoutWindowActivity",
    });
class E extends l.A {
    _observer = null;
    _initialize() {
        a.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            a.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            a.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            a.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        a.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            a.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            a.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            a.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        c.open(
            u.MLl.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, i.jsx)(m, { windowKey: e, channelId: t.id })
                    : (0, i.jsx)(h, { windowKey: e, channelId: t.id }),
            { defaultWidth: 854, defaultHeight: 480 },
        );
    }
    handleOpenCallTilePopout = (e) => {
        let { channelId: t, participantId: n } = e,
            a = (0, s.A)(t, n);
        c.open(a, (e) => (0, i.jsx)(_, { windowKey: e, channelId: t, participantId: n }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    };
    initializeStyleSheetObserver() {
        (this._observer = new MutationObserver(function (e) {
            for (let t of e)
                if ("childList" === t.type) {
                    for (let e of t.addedNodes)
                        if (e.nodeType === Node.ELEMENT_NODE && "LINK" === e.tagName && "stylesheet" === e.rel) {
                            let t = e.href,
                                n = e.integrity;
                            c.addStylesheet(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        c.open(u.MLl.RTC_DEBUG_POPOUT, (e) => (0, i.jsx)(p, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
    handleOpenActivityPopout() {
        (0, r.Vz)(A.G, d.A.getDefaultLayout(A.G, 4), 4),
            c.open(u.MLl.ACTIVITY_POPOUT, (e) => (0, i.jsx)(g, { windowKey: e }), {
                defaultWidth: 854,
                defaultHeight: 480,
            });
    }
}
let I = new E();
