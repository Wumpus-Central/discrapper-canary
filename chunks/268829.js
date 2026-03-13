"use strict";
var r = n(265690),
    i = n(121894),
    s = n(734057);
(0, r.h)((e, t) => ({
    channels: new Set(),
    isActivityFocused: !1,
    isVoicePanelFullscreen: () => t().voicePanelsFullscreen.size > 0,
    isAnyVoicePanelOpen: () => t().voicePanelsOpened.size > 0,
    voicePanelsFullscreen: new Set(),
    voicePanelsOpened: new Set(),
    voicePanelsPIP: new Set(),
    openChannel(n) {
        s.A.getChannel(n)?.isGuildStageVoice() === !0 ||
            t().channels.has(n) ||
            (0, i.r)(() => {
                e((e) => ({
                    ...e,
                    channels: new Set([n, ...Array.from(e.channels)]),
                    voicePanelsOpened: new Set([n, ...Array.from(e.voicePanelsOpened)]),
                }));
            });
    },
    closeChannel(t) {
        (0, i.r)(() => {
            e((e) => {
                let { channels: n, voicePanelsFullscreen: r, voicePanelsOpened: i } = e;
                return n.has(t) || r.has(t) || i.has(t)
                    ? (n.has(t) && (n = new Set(n)).delete(t),
                      r.has(t) && (r = new Set(r)).delete(t),
                      i.has(t) && (i = new Set(i)).delete(t),
                      { ...e, channels: n, voicePanelsFullscreen: r, voicePanelsOpened: i })
                    : e;
            });
        });
    },
    isMounted: (e) => t().channels.has(e),
    setIsActivityFocused(t) {
        (0, i.r)(() => {
            e((e) => (e.isActivityFocused === t ? e : { ...e, isActivityFocused: t }));
        });
    },
    setChannelPanelFullscreen(t, n) {
        (0, i.r)(() => {
            e((e) => {
                let r = new Set(e.voicePanelsFullscreen);
                if (n) {
                    if (r.has(t)) return e;
                    r.add(t);
                } else {
                    if (!r.has(t)) return e;
                    r.delete(t);
                }
                return { ...e, voicePanelsFullscreen: r };
            });
        });
    },
    setChannelPanelOpen(t, n) {
        (0, i.r)(() => {
            e((e) => {
                if (!e.channels.has(t)) return e;
                let r = new Set(e.voicePanelsOpened);
                if (n) {
                    if (r.has(t)) return e;
                    r.add(t);
                } else {
                    if (!r.has(t)) return e;
                    r.delete(t);
                }
                return { ...e, voicePanelsOpened: r };
            });
        });
    },
    isChannelOpen: (e) => t().voicePanelsOpened.has(e),
    setChannelPanelPIP(t, n) {
        (0, i.r)(() => {
            e((e) => {
                let r = new Set(e.voicePanelsPIP);
                if (n) {
                    if (r.has(t)) return e;
                    r.add(t);
                } else {
                    if (!r.has(t)) return e;
                    r.delete(t);
                }
                return { ...e, voicePanelsPIP: r };
            });
        });
    },
}));
