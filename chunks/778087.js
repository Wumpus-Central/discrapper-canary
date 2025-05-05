n.d(t, { Z: () => l }), n(49124), n(781311);
var r = n(73800),
    i = n(10718);
function l(e, t) {
    let n = r.useRef(null),
        l = r.useCallback((e, t) => {
            var r, i, l;
            e.preventDefault(), e.clipboardData.setData('application/x-discord-interaction-data', JSON.stringify(t)), e.clipboardData.setData('text/plain', null != (l = null == (i = n.current) || null == (r = i.textContent) ? void 0 : r.trim()) ? l : '');
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
            onCopy: l,
            copyRef: n
        }
    );
}
