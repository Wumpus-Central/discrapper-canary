i.d(e, { L: () => _ });
var n = i(627968),
    l = i(417597),
    s = i(397927),
    r = i(419954),
    u = i(430452),
    a = i(975571),
    o = i(780964),
    T = i(501496),
    A = i(652215),
    S = i(731854),
    E = i(985018);
let d = "".concat(
        a.A.getArticleURL(A.MVz.VOICE_VIDEO_TROUBLESHOOTING),
        "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
    ),
    _ = (0, r.E2)(o.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [E.intl.string(E.t.nuFtHH)],
        usePredicate: function () {
            return (0, l.bG)([u.A], () => u.A.supports(S.O5.LOOPBACK));
        },
        Component: function () {
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(T.A, {}),
                    (0, n.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: E.intl.format(E.t["V+B3FH"], { guideURL: d }),
                    }),
                ],
            });
        },
    });
