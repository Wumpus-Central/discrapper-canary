n.d(t, {
    Z: () => l,
    b: () => i
}),
    n(653041);
var o,
    a = n(388032),
    i = (((o = {}).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all"), (o.NOBODY_COULD_HEAR_ME = 'Nobody could hear me'), (o.AUDIO_ECHOS = 'Audio had echos or feedback'), (o.AUDIO_ROBOTIC = 'Audio was robotic or distorted'), (o.AUDIO_CUT = 'Audio cut in and out'), (o.BAD_VOLUME = 'Volume was too low or high'), (o.BACKGROUND_NOISE = 'Background noise was too loud'), (o.SPEAKERPHONE = 'Issues with speakerphone'), (o.HEADSET = 'Issues with headset/bluetooth'), (o.OTHER = 'Other'), o);
function l(e) {
    let t = [
        {
            label: a.NW.string(a.t['UqD/9f']),
            code: 2,
            value: "I couldn't hear audio at all"
        },
        {
            label: a.NW.string(a.t.DVEGuL),
            code: 3,
            value: 'Nobody could hear me'
        },
        {
            label: a.NW.string(a.t['2nWcBw']),
            code: 4,
            value: 'Audio had echos or feedback'
        },
        {
            label: a.NW.string(a.t.K3E4Dw),
            code: 5,
            value: 'Audio was robotic or distorted'
        },
        {
            label: a.NW.string(a.t.Dpm2U1),
            code: 6,
            value: 'Audio cut in and out'
        },
        {
            label: a.NW.string(a.t.kuGsi4),
            code: 7,
            value: 'Volume was too low or high'
        },
        {
            label: a.NW.string(a.t.PkiFCQ),
            code: 8,
            value: 'Background noise was too loud'
        }
    ];
    return (
        e &&
            t.push({
                label: a.NW.string(a.t.hvIDwc),
                code: 9,
                value: 'Issues with speakerphone'
            }),
        t.push(
            {
                label: a.NW.string(a.t['+gUm1t']),
                code: 10,
                value: 'Issues with headset/bluetooth'
            },
            {
                label: a.NW.string(a.t['emlT9/']),
                code: 1,
                value: 'Other'
            }
        ),
        t
    );
}
