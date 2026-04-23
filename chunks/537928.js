"use strict";
n.d(t, { z: () => l });
var r = n(627968);
n(64700);
var i = n(939249),
    s = n(834730),
    a = n(194267),
    o = n(420298);
function l(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        applications: l,
        popoutTargetElementRef: u,
        onGameSheetOpened: c,
        onGameSheetClosed: d,
    } = e;
    return (e) =>
        (0, r.jsx)(
            a.A,
            {
                quest: t,
                sourceQuestContent: n,
                applications: l ?? [],
                targetElementRef: u,
                onGameSheetOpened: c,
                onGameSheetClosed: d,
                children: (t, n) =>
                    (0, r.jsx)(i.D, {
                        ...t,
                        style: { display: "inline-block", cursor: "pointer" },
                        innerRef: n,
                        children: (0, r.jsx)(s.E, {
                            variant: "text-xs/normal",
                            color: "text-link",
                            className: o.s3,
                            children: e,
                        }),
                    }),
            },
            t.id,
        );
}
