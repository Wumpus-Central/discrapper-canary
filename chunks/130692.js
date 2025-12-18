n.d(t, { Z: () => a });
var i = n(473749),
    r = n(392711),
    l = n(390551);
let a = (e) =>
    i.useMemo(() => {
        let t = (0, r.clamp)(e.avatar, 0, l.eJ.length - 1),
            n = l.x3[l.eJ[t]];
        return null == n && (n = l.x3[l.oc.IMP]), n;
    }, [e.avatar]);
