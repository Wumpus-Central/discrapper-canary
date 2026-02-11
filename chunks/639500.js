i.d(t, { L: () => E });
var n = i(627968),
    l = i(417597),
    s = i(397927),
    r = i(419954),
    a = i(430452),
    u = i(975571),
    o = i(780964),
    d = i(501496),
    _ = i(652215),
    T = i(731854),
    A = i(985018);
let S = `${u.A.getArticleURL(_.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    E = (0, r.E2)(o.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [A.intl.string(A.t.nuFtHH)],
        usePredicate: function () {
            return (0, l.bG)([a.Ay], () => a.Ay.supports(T.O5.LOOPBACK));
        },
        Component: function () {
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(d.A, {}),
                    (0, n.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: A.intl.format(A.t["V+B3FH"], { guideURL: S }),
                    }),
                ],
            });
        },
    });
