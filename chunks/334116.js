n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(73153),
    l = n(391973),
    a = n(272355),
    s = n(958005),
    o = n(268218),
    c = n(555528),
    u = n(574172),
    d = n(652215),
    p = n(644434);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n(518959);
let h = (0, o.Fe)({
        createPromise: () => n.e("71138").then(n.bind(n, 140539)),
        webpackId: 140539,
        name: "PopoutWindowChannelCall",
    }),
    A = (0, o.Fe)({
        createPromise: () => n.e("36133").then(n.bind(n, 943472)),
        webpackId: 943472,
        name: "PopoutWindowCallTile",
    }),
    g = (0, o.Fe)({
        createPromise: () => n.e("36308").then(n.bind(n, 911315)),
        webpackId: 911315,
        name: "PopoutWindowStageChannelCall",
    }),
    m = (0, o.Fe)({
        createPromise: () => n.e("71138").then(n.bind(n, 414760)),
        webpackId: 414760,
        name: "PopoutWindowRTCDebug",
    }),
    b = (0, o.Fe)({
        createPromise: () => Promise.all([n.e("71447"), n.e("13492")]).then(n.bind(n, 860051)),
        webpackId: 860051,
        name: "PopoutWindowActivity",
    });
class _ extends a.A {
    _initialize() {
        i.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            i.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            i.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            i.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        i.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            i.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            i.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            i.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        u.open(
            d.MLl.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, r.jsx)(g, {
                          windowKey: e,
                          channelId: t.id,
                      })
                    : (0, r.jsx)(h, {
                          windowKey: e,
                          channelId: t.id,
                      }),
            {
                defaultWidth: 854,
                defaultHeight: 480,
            },
        );
    }
    initializeStyleSheetObserver() {
        (this._observer = new MutationObserver(function (e) {
            for (let t of e)
                if ("childList" === t.type) {
                    for (let e of t.addedNodes)
                        if (e.nodeType === Node.ELEMENT_NODE && "LINK" === e.tagName && "stylesheet" === e.rel) {
                            let t = e.href,
                                n = e.integrity;
                            u.addStylesheet(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, {
                childList: !0,
            });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        u.open(
            d.MLl.RTC_DEBUG_POPOUT,
            (e) =>
                (0, r.jsx)(m, {
                    windowKey: e,
                }),
            {
                defaultWidth: 854,
                defaultHeight: 480,
            },
        );
    }
    handleOpenActivityPopout() {
        (0, l.Vz)(p.G, c.A.getDefaultLayout(p.G, 3), 3),
            u.open(
                d.MLl.ACTIVITY_POPOUT,
                (e) =>
                    (0, r.jsx)(b, {
                        windowKey: e,
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480,
                },
            );
    }
    constructor(...e) {
        super(...e),
            f(this, "_observer", null),
            f(this, "handleOpenCallTilePopout", (e) => {
                let { channelId: t, participantId: n } = e,
                    i = (0, s.A)(t, n);
                u.open(
                    i,
                    (e) =>
                        (0, r.jsx)(A, {
                            windowKey: e,
                            channelId: t,
                            participantId: n,
                        }),
                    {
                        defaultWidth: 854,
                        defaultHeight: 480,
                    },
                );
            });
    }
}
let E = new _();
