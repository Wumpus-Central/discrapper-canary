"use strict";
r.d(t, { I: () => s });
var n = r(361854),
    i = r(582128);
let o = 0,
    a = new Map();
function s(e) {
    let [t, r] = (0, i.useState)();
    return (
        (0, n.N)(() => {
            if (!e) return;
            let t = a.get(e);
            if (t) r(t.element.id);
            else {
                let n = `react-aria-description-${o++}`;
                r(n);
                let i = document.createElement("div");
                (i.id = n),
                    (i.style.display = "none"),
                    (i.textContent = e),
                    document.body.appendChild(i),
                    (t = { refCount: 0, element: i }),
                    a.set(e, t);
            }
            return (
                t.refCount++,
                () => {
                    t && 0 == --t.refCount && (t.element.remove(), a.delete(e));
                }
            );
        }, [e]),
        { "aria-describedby": e ? t : void 0 }
    );
}
