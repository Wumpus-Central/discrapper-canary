let i = null,
    r = new Set();
function a() {
    for (let e of r) e();
}
n.d(
    t,
    {},
    {
        $P: function (e) {
            return (
                r.add(e),
                () => {
                    r.delete(e);
                }
            );
        },
        Eh: function () {
            return i;
        },
        OR: function (e) {
            null != i && (null == e || i.iframeId === e) && ((i = null), a());
        },
        Ps: function (e) {
            ((i = { ...e }), a());
        },
    },
);
