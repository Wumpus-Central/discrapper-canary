"use strict";
n.d(t, { z: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(194267),
    a = n(650746);
function o(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        applications: o,
        popoutTargetElementRef: l,
        onGameSheetOpened: u,
        onGameSheetClosed: c,
    } = e;
    return (e) =>
        (0, r.jsx)(
            s.A,
            {
                quest: t,
                sourceQuestContent: n,
                applications: o ?? [],
                targetElementRef: l,
                onGameSheetOpened: u,
                onGameSheetClosed: c,
                children: (t, n) =>
                    (0, r.jsx)(i.DUT, {
                        ...t,
                        style: { display: "inline-block", cursor: "pointer" },
                        innerRef: n,
                        children: (0, r.jsx)(i.Text, {
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
