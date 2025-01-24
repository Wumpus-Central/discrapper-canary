n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(192379),
    r = n(10718);
function l(e, t) {
    let n = i.useRef(null),
        l = i.useCallback((e, t) => {
            var i, r, l;
            e.preventDefault(), e.clipboardData.setData('application/x-discord-interaction-data', JSON.stringify(t)), e.clipboardData.setData('text/plain', null !== (l = null === (r = n.current) || void 0 === r ? void 0 : null === (i = r.textContent) || void 0 === i ? void 0 : i.trim()) && void 0 !== l ? l : '');
        }, []);
    return (
        r.YZ(
            {
                channel: e,
                type: 'channel'
            },
            t
        ),
        {
            onCopy: l,
            copyRef: n
        }
    );
}
