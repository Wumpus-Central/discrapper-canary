n.d(t, { Z: () => a });
var i = n(192379),
    l = n(10718);
function a(e, t) {
    let n = i.useRef(null),
        a = i.useCallback((e, t) => {
            var i, l, a;
            e.preventDefault(), e.clipboardData.setData('application/x-discord-interaction-data', JSON.stringify(t)), e.clipboardData.setData('text/plain', null !== (a = null === (l = n.current) || void 0 === l ? void 0 : null === (i = l.textContent) || void 0 === i ? void 0 : i.trim()) && void 0 !== a ? a : '');
        }, []);
    return (
        l.YZ(
            {
                channel: e,
                type: 'channel'
            },
            t
        ),
        {
            onCopy: a,
            copyRef: n
        }
    );
}
