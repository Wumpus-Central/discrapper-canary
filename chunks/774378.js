n.d(t, { Z: () => l }), n(653041);
var i = n(388032);
function l(e) {
    let t = [
        {
            label: i.intl.string(i.t['UqD/9f']),
            code: 2,
            value: "I couldn't hear audio at all"
        },
        {
            label: i.intl.string(i.t.DVEGuL),
            code: 3,
            value: 'Nobody could hear me'
        },
        {
            label: i.intl.string(i.t['2nWcBw']),
            code: 4,
            value: 'Audio had echos or feedback'
        },
        {
            label: i.intl.string(i.t.K3E4Dw),
            code: 5,
            value: 'Audio was robotic or distorted'
        },
        {
            label: i.intl.string(i.t.Dpm2U1),
            code: 6,
            value: 'Audio cut in and out'
        },
        {
            label: i.intl.string(i.t.kuGsi4),
            code: 7,
            value: 'Volume was too low or high'
        },
        {
            label: i.intl.string(i.t.PkiFCQ),
            code: 8,
            value: 'Background noise was too loud'
        }
    ];
    return (
        e &&
            t.push({
                label: i.intl.string(i.t.hvIDwc),
                code: 9,
                value: 'Issues with speakerphone'
            }),
        t.push(
            {
                label: i.intl.string(i.t['+gUm1t']),
                code: 10,
                value: 'Issues with headset/bluetooth'
            },
            {
                label: i.intl.string(i.t['emlT9/']),
                code: 1,
                value: 'Other'
            }
        ),
        t
    );
}
