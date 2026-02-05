i.d(e, { L: () => g });
var n = i(627968),
    l = i(417597),
    s = i(397927),
    r = i(419954),
    a = i(430452),
    u = i(975571),
    o = i(780964),
    d = i(501496),
    T = i(652215),
    A = i(731854),
    S = i(985018);
let E = `${u.A.getArticleURL(T.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    g = (0, r.E2)(o.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [S.intl.string(S.t.nuFtHH)],
        usePredicate: function () {
            return (0, l.bG)([a.A], () => a.A.supports(A.O5.LOOPBACK));
        },
        Component: function () {
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(d.A, {}),
                    (0, n.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: S.intl.format(S.t["V+B3FH"], { guideURL: E }),
                    }),
                ],
            });
        },
    });
