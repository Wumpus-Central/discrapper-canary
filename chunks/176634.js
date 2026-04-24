"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(621466),
    a = n(654108);
function s(e) {
    let { onPasteFiles: t, onPasteBackgroundText: n } = e;
    i.useEffect(() => {
        let e = (e) => {
            let i = e.clipboardData?.files;
            if (null != i && i.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(i));
            else if (null != n && !(0, a.A)((0, r.BF)(e))) {
                let t = e.clipboardData?.getData("text");
                null != t && (e.preventDefault(), e.stopPropagation(), n(t));
            }
        };
        return (
            document.addEventListener("paste", e, !0),
            () => {
                document.removeEventListener("paste", e, !0);
            }
        );
    }, [t, n]);
}
