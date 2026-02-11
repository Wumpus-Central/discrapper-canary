i.d(t, { p: () => N });
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(74848),
    a = i(419954),
    u = i(933297),
    o = i(843401),
    d = i(723702),
    _ = i(780964),
    T = i(801264),
    A = i(902713),
    S = i(428961),
    E = i(639500),
    c = i(731854),
    g = i(985018);
let I = d.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function C(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, n.jsxs)(s.BJc, {
        children: [
            i && (0, n.jsx)(o.A, { sourcePage: "voice" }),
            t && (0, n.jsx)(T.A, { look: T.k.WARNING, children: g.intl.string(g.t.Ioz3gx) }),
        ],
    });
}
let N = (0, a.zZ)(_.X.VOICE_CATEGORY, {
    useTitle: () => g.intl.string(g.t.K3lovD),
    useInlineNotice: function () {
        let e = (0, o.I)("voice"),
            t = (0, r.x5)(c.oh.AUDIO_INPUT),
            i = (0, r.x5)(c.oh.AUDIO_OUTPUT),
            s = l.useMemo(() => {
                let e = I.some((e) => t?.hardwareId?.startsWith(e)),
                    n = I.some((e) => i?.hardwareId?.startsWith(e));
                return e && n && t?.containerId != null && t.containerId === i?.containerId;
            }, [t, i]);
        return l.useMemo(
            () =>
                e.canPrompt || s
                    ? {
                          type: u.lT.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: () =>
                              (0, n.jsx)(C, {
                                  inputAndOutputAreBluetooth: s,
                                  canPromptSystemServiceInstallForVoice: e.canPrompt,
                              }),
                      }
                    : null,
            [e.canPrompt, s],
        );
    },
    buildLayout: () => [A.a, S.d, E.L],
});
