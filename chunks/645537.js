n.d(t, { P: () => s });
var r = n(159447),
    i = n(473749);
let a = 0,
    o = new Map();
function s(e) {
    let [t, n] = (0, i.useState)();
    return (
        (0, r.b)(() => {
            if (!e) return;
            let t = o.get(e);
            if (t) n(t.element.id);
            else {
                let r = `react-aria-description-${a++}`;
                n(r);
                let i = document.createElement("div");
                (i.id = r),
                    (i.style.display = "none"),
                    (i.textContent = e),
                    document.body.appendChild(i),
                    (t = {
                        refCount: 0,
                        element: i,
                    }),
                    o.set(e, t);
            }
            return (
                t.refCount++,
                () => {
                    t && 0 == --t.refCount && (t.element.remove(), o.delete(e));
                }
            );
        }, [e]),
        { "aria-describedby": e ? t : void 0 }
    );
}
