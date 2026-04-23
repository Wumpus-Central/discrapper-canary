"use strict";
n.d(t, { A: () => o });
var r = n(621466),
    i = n(203982),
    s = n(654108),
    a = n(652215);
let o = {
    init() {
        document.addEventListener("paste", (e) => {
            (0, s.A)((0, r.BF)(e)) || i._.dispatchToLastSubscribed(a.jej.GLOBAL_CLIPBOARD_PASTE, { event: e });
        });
    },
};
