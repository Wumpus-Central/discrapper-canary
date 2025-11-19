n.d(e, { a: () => s }), n(388685);
var i = n(473749),
    a = n(877481);
function s(t) {
    let [e, n] = i.useState(null);
    return (
        i.useEffect(() => {
            a.Z.isLaunchable(t).then(n);
        }, [t]),
        e
    );
}
