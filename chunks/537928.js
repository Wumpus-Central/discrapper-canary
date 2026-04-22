"use strict";
n.d(t, { z: () => o });
var i = n(627968);
n(64700);
var l = n(939249),
    s = n(834730),
    r = n(194267),
    a = n(420298);
function o(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        applications: o,
        popoutTargetElementRef: c,
        onGameSheetOpened: u,
        onGameSheetClosed: d,
    } = e;
    return (e) =>
        (0, i.jsx)(
            r.A,
            {
                quest: t,
                sourceQuestContent: n,
                applications: o ?? [],
                targetElementRef: c,
                onGameSheetOpened: u,
                onGameSheetClosed: d,
                children: (t, n) =>
                    (0, i.jsx)(l.D, {
                        ...t,
                        style: { display: "inline-block", cursor: "pointer" },
                        innerRef: n,
                        children: (0, i.jsx)(s.E, {
                            variant: "text-xs/normal",
                            color: "text-link",
                            className: a.s3,
                            children: e,
                        }),
                    }),
            },
            t.id,
        );
}
