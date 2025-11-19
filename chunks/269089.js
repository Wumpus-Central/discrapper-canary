n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(570140),
    l = n(765250),
    a = n(317770),
    s = n(7291),
    o = n(663993),
    c = n(355863),
    u = n(788983),
    d = n(981631),
    p = n(757744);
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
n(593235);
let h = (0, o.Un)({
        createPromise: () => n.e("80960").then(n.bind(n, 223455)),
        webpackId: 223455,
        name: "PopoutWindowChannelCall",
    }),
    g = (0, o.Un)({
        createPromise: () => n.e("31688").then(n.bind(n, 205557)),
        webpackId: 205557,
        name: "PopoutWindowCallTile",
    }),
    m = (0, o.Un)({
        createPromise: () => n.e("20176").then(n.bind(n, 432472)),
        webpackId: 432472,
        name: "PopoutWindowStageChannelCall",
    }),
    _ = (0, o.Un)({
        createPromise: () => n.e("80960").then(n.bind(n, 945778)),
        webpackId: 945778,
        name: "PopoutWindowRTCDebug",
    }),
    b = (0, o.Un)({
        createPromise: () => Promise.all([n.e("50751"), n.e("27278")]).then(n.bind(n, 748623)),
        webpackId: 748623,
        name: "PopoutWindowActivity",
    });
class E extends a.Z {
    _initialize() {
        i.Z.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            i.Z.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            i.Z.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            i.Z.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        i.Z.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            i.Z.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            i.Z.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            i.Z.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        u.bA(
            d.KJ3.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, r.jsx)(m, {
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
                            u.YS(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        u.bA(d.KJ3.RTC_DEBUG_POPOUT, (e) => (0, r.jsx)(_, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
    handleOpenActivityPopout() {
        (0, l.te)(p.$S, c.Z.getDefaultLayout(p.$S, p.HN), p.HN),
            u.bA(d.KJ3.ACTIVITY_POPOUT, (e) => (0, r.jsx)(b, { windowKey: e }), {
                defaultWidth: 854,
                defaultHeight: 480,
            });
    }
    constructor(...e) {
        super(...e),
            f(this, "_observer", null),
            f(this, "handleOpenCallTilePopout", (e) => {
                let { channelId: t, participantId: n } = e,
                    i = (0, s.Z)(t, n);
                u.bA(
                    i,
                    (e) =>
                        (0, r.jsx)(g, {
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
let O = new E();
