n.d(t, { A: () => a });
var l = n(64700),
    i = n(621466),
    r = n(654108);
function a(e) {
    let { onPasteFiles: t, onPasteBackgroundText: n } = e;
    l.useEffect(() => {
        let e = (e) => {
            let l = e.clipboardData?.files;
            if (null != l && l.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(l));
            else if (null != n && !(0, r.A)((0, i.BF)(e))) {
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
