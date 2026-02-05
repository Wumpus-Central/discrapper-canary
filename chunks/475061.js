i.d(e, { p: () => C });
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(74848),
    a = i(419954),
    u = i(933297),
    o = i(843401),
    d = i(723702),
    T = i(780964),
    A = i(801264),
    S = i(902713),
    E = i(428961),
    g = i(639500),
    _ = i(731854),
    c = i(985018);
let I = d.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function N(t) {
    let { inputAndOutputAreBluetooth: e, canPromptSystemServiceInstallForVoice: i } = t;
    return (0, n.jsxs)(s.BJc, {
        children: [
            i && (0, n.jsx)(o.A, { sourcePage: "voice" }),
            e && (0, n.jsx)(A.A, { look: A.k.WARNING, children: c.intl.string(c.t.Ioz3gx) }),
        ],
    });
}
let C = (0, a.zZ)(T.X.VOICE_CATEGORY, {
    useTitle: () => c.intl.string(c.t.K3lovD),
    useInlineNotice: function () {
        let t = (0, o.I)("voice"),
            e = (0, r.x5)(_.oh.AUDIO_INPUT),
            i = (0, r.x5)(_.oh.AUDIO_OUTPUT),
            s = l.useMemo(() => {
                let t = I.some((t) => e?.hardwareId?.startsWith(t)),
                    n = I.some((t) => i?.hardwareId?.startsWith(t));
                return t && n && e?.containerId != null && e.containerId === i?.containerId;
            }, [e, i]);
        return l.useMemo(
            () =>
                t.canPrompt || s
                    ? {
                          type: u.W.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: () =>
                              (0, n.jsx)(N, {
                                  inputAndOutputAreBluetooth: s,
                                  canPromptSystemServiceInstallForVoice: t.canPrompt,
                              }),
                      }
                    : null,
            [t.canPrompt, s],
        );
    },
    buildLayout: () => [S.a, E.d, g.L],
});
