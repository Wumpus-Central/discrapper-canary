"use strict";
r.d(t, { I: () => s });
var n = r(576024),
    o = r(582128);
let i = 0,
    a = new Map();
function s(e) {
    let [t, r] = (0, o.useState)();
    return (
        (0, n.N)(() => {
            if (!e) return;
            let t = a.get(e);
            if (t) r(t.element.id);
            else {
                let n = `react-aria-description-${i++}`;
                r(n);
                let o = document.createElement("div");
                (o.id = n),
                    (o.style.display = "none"),
                    (o.textContent = e),
                    document.body.appendChild(o),
                    (t = { refCount: 0, element: o }),
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
