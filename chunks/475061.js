i.d(t, {
    p: () => C,
});
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(74848),
    a = i(419954),
    u = i(933297),
    o = i(843401),
    d = i(723702),
    T = i(780964),
    c = i(801264),
    A = i(902713),
    S = i(428961),
    _ = i(639500),
    E = i(731854),
    g = i(985018);
let I = d.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function O(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, n.jsxs)(s.BJc, {
        children: [
            i &&
                (0, n.jsx)(o.A, {
                    sourcePage: "voice",
                }),
            t &&
                (0, n.jsx)(c.A, {
                    look: c.k.WARNING,
                    children: g.intl.string(g.t.Ioz3gx),
                }),
        ],
    });
}
let C = (0, a.zZ)(T.X.VOICE_CATEGORY, {
    useTitle: () => g.intl.string(g.t.K3lovD),
    useInlineNotice: function () {
        let e = (0, o.I)("voice"),
            t = (0, r.x5)(E.oh.AUDIO_INPUT),
            i = (0, r.x5)(E.oh.AUDIO_OUTPUT),
            s = l.useMemo(() => {
                let e = I.some((e) => {
                        var i;
                        return null == t || null == (i = t.hardwareId) ? void 0 : i.startsWith(e);
                    }),
                    n = I.some((e) => {
                        var t;
                        return null == i || null == (t = i.hardwareId) ? void 0 : t.startsWith(e);
                    });
                return (
                    e &&
                    n &&
                    (null == t ? void 0 : t.containerId) != null &&
                    t.containerId === (null == i ? void 0 : i.containerId)
                );
            }, [t, i]);
        return l.useMemo(
            () =>
                e.canPrompt || s
                    ? {
                          type: u.W.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: () =>
                              (0, n.jsx)(O, {
                                  inputAndOutputAreBluetooth: s,
                                  canPromptSystemServiceInstallForVoice: e.canPrompt,
                              }),
                      }
                    : null,
            [e.canPrompt, s],
        );
    },
    buildLayout: () => [A.a, S.d, _.L],
});
