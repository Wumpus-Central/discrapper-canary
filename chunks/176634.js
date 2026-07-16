a.d(t, { A: () => i });
var n = a(64700),
    l = a(621466);
function i(e) {
    let { onPasteFiles: t, onPasteBackgroundText: a } = e;
    n.useEffect(() => {
        function e(e) {
            let n = e.clipboardData?.files;
            if (null != n && n.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(n));
            else if (null != a && !(0, l.Cw)((0, l.BF)(e)?.activeElement)) {
                let t = e.clipboardData?.getData("text");
                null != t && (e.preventDefault(), e.stopPropagation(), a(t));
            }
        }
        return (
            document.addEventListener("paste", e, !0),
            () => {
                document.removeEventListener("paste", e, !0);
            }
        );
    }, [t, a]);
}
