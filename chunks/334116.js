n.d(t, { A: () => p });
var i = n(627968),
    r = n(73153),
    a = n(272355),
    l = n(958005),
    s = n(268218),
    o = n(574172),
    d = n(652215);
n(178116);
let u = (0, s.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("755"),
                n.e("77602"),
                n.e("46815"),
                n.e("84114"),
                n.e("66788"),
                n.e("50695"),
                n.e("71138"),
            ]).then(n.bind(n, 140539)),
        webpackId: 140539,
        name: "PopoutWindowChannelCall",
    }),
    c = (0, s.Fe)({
        createPromise: () =>
            Promise.all([n.e("755"), n.e("46815"), n.e("84114"), n.e("36133")]).then(n.bind(n, 943472)),
        webpackId: 943472,
        name: "PopoutWindowCallTile",
    }),
    A = (0, s.Fe)({
        createPromise: () =>
            Promise.all([n.e("755"), n.e("46815"), n.e("84114"), n.e("66788"), n.e("42241"), n.e("36308")]).then(
                n.bind(n, 911315),
            ),
        webpackId: 911315,
        name: "PopoutWindowStageChannelCall",
    }),
    h = (0, s.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("755"),
                n.e("77602"),
                n.e("46815"),
                n.e("84114"),
                n.e("66788"),
                n.e("50695"),
                n.e("71138"),
            ]).then(n.bind(n, 414760)),
        webpackId: 414760,
        name: "PopoutWindowRTCDebug",
    }),
    _ = (0, s.Fe)({
        createPromise: () => n.e("13492").then(n.bind(n, 860051)),
        webpackId: 860051,
        name: "PopoutWindowActivity",
    });
class E extends a.A {
    _observer = null;
    _initialize() {
        r.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            r.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            r.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            r.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        r.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            r.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            r.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            r.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        o.open(
            d.MLl.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, i.jsx)(A, { windowKey: e, channelId: t.id })
                    : (0, i.jsx)(u, { windowKey: e, channelId: t.id }),
            { defaultWidth: 854, defaultHeight: 480 },
        );
    }
    handleOpenCallTilePopout = (e) => {
        let { channelId: t, participantId: n } = e,
            r = (0, l.A)(t, n);
        o.open(r, (e) => (0, i.jsx)(c, { windowKey: e, channelId: t, participantId: n }), {
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
                            o.addStylesheet(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        o.open(d.MLl.RTC_DEBUG_POPOUT, (e) => (0, i.jsx)(h, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
    handleOpenActivityPopout() {
        o.open(d.MLl.ACTIVITY_POPOUT, (e) => (0, i.jsx)(_, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
}
let p = new E();
