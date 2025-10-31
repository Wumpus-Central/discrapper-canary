e.d(n, { a: () => s }), e(388685);
var i = e(647438),
    a = e(877481);
function s(t) {
    let [n, e] = i.useState(null);
    return (
        i.useEffect(() => {
            a.Z.isLaunchable(t).then(e);
        }, [t]),
        n
    );
}
