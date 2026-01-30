n.d(t, {
    A: () => a,
});
var r = n(64700),
    i = n(621466),
    o = n(654108);

function a(e) {
    let { onPasteFiles: t, onPasteBackgroundText: n } = e;
    r.useEffect(() => {
        let e = (e) => {
            var r, a;
            let l = null == (r = e.clipboardData) ? void 0 : r.files;
            if (null != l && l.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(l));
            else if (null != n && !(0, o.A)((0, i.BF)(e))) {
                let t = null == (a = e.clipboardData) ? void 0 : a.getData("text");
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
