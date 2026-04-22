"use strict";
r.d(t, { A: () => l });
var i = r(64700),
    a = r(621466),
    n = r(654108);
function l(e) {
    let { onPasteFiles: t, onPasteBackgroundText: r } = e;
    i.useEffect(() => {
        let e = (e) => {
            let i = e.clipboardData?.files;
            if (null != i && i.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(i));
            else if (null != r && !(0, n.A)((0, a.BF)(e))) {
                let t = e.clipboardData?.getData("text");
                null != t && (e.preventDefault(), e.stopPropagation(), r(t));
            }
        };
        return (
            document.addEventListener("paste", e, !0),
            () => {
                document.removeEventListener("paste", e, !0);
            }
        );
    }, [t, r]);
}
