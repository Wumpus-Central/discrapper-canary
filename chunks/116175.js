n.d(t, {
    ME: () => l,
    Nh: () => o,
    ZD: () => r,
    lP: () => c,
    sg: () => i,
    vY: () => a,
    yf: () => s
});
var r = (function (e) {
    return (e[(e.SWORD = 0)] = 'SWORD'), (e[(e.WATER_DROP = 1)] = 'WATER_DROP'), (e[(e.SKULL = 2)] = 'SKULL'), (e[(e.TOADSTOOL = 3)] = 'TOADSTOOL'), (e[(e.MOON = 4)] = 'MOON'), (e[(e.LIGHTNING = 5)] = 'LIGHTNING'), (e[(e.LEAF = 6)] = 'LEAF'), (e[(e.HEART = 7)] = 'HEART'), (e[(e.FIRE = 8)] = 'FIRE'), (e[(e.COMPASS = 9)] = 'COMPASS'), (e[(e.CROSSHAIRS = 10)] = 'CROSSHAIRS'), (e[(e.FLOWER = 11)] = 'FLOWER'), (e[(e.FORCE = 12)] = 'FORCE'), (e[(e.GEM = 13)] = 'GEM'), (e[(e.LAVA = 14)] = 'LAVA'), (e[(e.PSYCHIC = 15)] = 'PSYCHIC'), (e[(e.SMOKE = 16)] = 'SMOKE'), (e[(e.SNOW = 17)] = 'SNOW'), (e[(e.SOUND = 18)] = 'SOUND'), (e[(e.SUN = 19)] = 'SUN'), (e[(e.WIND = 20)] = 'WIND'), e;
})({});
let i = [
        {
            primary: '#ff1c90',
            secondary: '#ff7fc0'
        },
        {
            primary: '#ff8f1c',
            secondary: '#ffae77'
        },
        {
            primary: '#eebe1a',
            secondary: '#fffc7f'
        },
        {
            primary: '#32a070',
            secondary: '#57b59e'
        },
        {
            primary: '#32839a',
            secondary: '#71c2d9'
        },
        {
            primary: '#8a43ff',
            secondary: '#bd95ff'
        },
        {
            primary: '#9b3fe5',
            secondary: '#cc8dff'
        },
        {
            primary: '#942e8f',
            secondary: '#d46cb5'
        },
        {
            primary: '#d14242',
            secondary: '#ff8989'
        },
        {
            primary: '#814300',
            secondary: '#a88a6c'
        },
        {
            primary: '#717224',
            secondary: '#c3c3c3'
        },
        {
            primary: '#5d1d47',
            secondary: '#c58fbb'
        },
        {
            primary: '#222222',
            secondary: '#cccccc'
        }
    ],
    o = i[0].primary,
    a = i[0].secondary;
function s() {
    return i[Math.floor(Math.random() * i.length)];
}
let l = {
    0: 2,
    1: 1,
    2: 1,
    3: 2,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 2,
    10: 2,
    11: 2,
    12: 2,
    13: 2,
    14: 2,
    15: 2,
    16: 2,
    17: 2,
    18: 2,
    19: 2,
    20: 2
};
function c() {
    let e = Object.keys(r).filter((e) => isNaN(Number(e)));
    return r[e[Math.floor(Math.random() * e.length)]];
}
