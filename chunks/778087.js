(n.d(t, { Z: () => o }), n(49124), n(781311));
var r = n(73800),
    i = n(10718);
function o(e, t) {
    let n = r.useRef(null),
        o = r.useCallback((e, t) => {
            var r, i, o;
            (e.preventDefault(), e.clipboardData.setData('application/x-discord-interaction-data', JSON.stringify(t)), e.clipboardData.setData('text/plain', null != (o = null == (i = n.current) || null == (r = i.textContent) ? void 0 : r.trim()) ? o : ''));
        }, []);
    return (
        i.YZ(
            {
                channel: e,
                type: 'channel'
            },
            t
        ),
        {
            onCopy: o,
            copyRef: n
        }
    );
}
