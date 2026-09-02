"use strict";
n.d(t, { iX: () => p, bf: () => h });
let i = {
    0: [
        { x: 13.6, y: 56.8 },
        { x: 27.5, y: 50.5 },
        { x: 40.5, y: 44.5 },
        { x: 12.5, y: 69 },
        { x: 23.5, y: 75 },
        { x: 12.5, y: 85 },
        { x: 38, y: 63 },
        { x: 45, y: 60 },
        { x: 51.7, y: 57 },
        { x: 58, y: 60 },
        { x: 65, y: 63 },
        { x: 67.4, y: 76.5 },
        { x: 79.2, y: 69.2 },
        { x: 92.5, y: 76.5 },
        { x: 75, y: 90 },
        { x: 85.5, y: 49 },
        { x: 94.5, y: 46 },
        { x: 96, y: 54 },
        { x: 39.5, y: 7 },
        { x: 49.5, y: 10 },
        { x: 60, y: 7 },
        { x: 36, y: 53.8 },
    ],
    1: [
        { x: 12, y: 47.8 },
        { x: 24.5, y: 43 },
        { x: 35.2, y: 38.5 },
        { x: 9.5, y: 72 },
        { x: 11, y: 87 },
        { x: 74, y: 27 },
        { x: 27.5, y: 63 },
        { x: 34.5, y: 60 },
        { x: 41.2, y: 57 },
        { x: 47.5, y: 60 },
        { x: 54.5, y: 63 },
        { x: 75.4, y: 74 },
        { x: 80.5, y: 88 },
        { x: 91.5, y: 80 },
        { x: 63, y: 24 },
        { x: 68, y: 15 },
        { x: 92, y: 59 },
        { x: 80, y: 18 },
        { x: 10, y: 18 },
        { x: 22, y: 13 },
        { x: 33, y: 9 },
        { x: 84, y: 31 },
    ],
};
var r = n(821578),
    a = n(750459),
    s = n(270103),
    l = n(375708);
let o =
    "https://cdn.discordapp.com/assets/content/7de81684192bd2bffb15960bbbd0c800452981c3c68d45da1eab9bd11d4354ac.png";
var d = n(880872),
    c = n(849351),
    u = n(572316),
    _ = n(192063);
let E =
        "https://cdn.discordapp.com/assets/content/8e37993ad6f8ec19df3a8b32fc1d3c7957fe1e2e8f1c81f6d9d6f7fbe6fec34b.webp",
    A = 5 / 219;
function h(e, t) {
    let n = 2 * A;
    return t && (n *= e), 1 + n;
}
function I(e, t) {
    return () => l.intl.formatToPlainString(s.default.crFI7e, { seatType: l.intl.string(e), number: t });
}
function f(e, t) {
    return () =>
        l.intl.formatToPlainString(s.default.LFdLjz, { seatType: l.intl.string(e), position: l.intl.string(t) });
}
let p = {
    [r.I.DEFAULT]: {
        background:
            "https://cdn.discordapp.com/assets/content/115cd3793681c8ac2115ad228f6b572346ddfda52ca2b403fe8397554e19aed0.webp",
        backgroundBlurred: E,
        aspectRatio: 4384 / 3208,
        getName: () => l.intl.formatToPlainString(s.default["3xb4VY"], { number: 1 }),
        seats: {
            [a.x.SEAT_1]: { name: "PC_SEAT_1", getLabel: I(s.default.ytIYuY, 1), position: i[r.I.DEFAULT][0] },
            [a.x.SEAT_2]: { name: "PC_SEAT_2", getLabel: I(s.default.ytIYuY, 2), position: i[r.I.DEFAULT][1] },
            [a.x.SEAT_3]: { name: "PC_SEAT_3", getLabel: I(s.default.ytIYuY, 3), position: i[r.I.DEFAULT][2] },
            [a.x.SEAT_4]: {
                name: "DUO_SEAT_1",
                getLabel: f(s.default.p7JgFM, s.default.YpJ7QS),
                position: i[r.I.DEFAULT][3],
            },
            [a.x.SEAT_5]: {
                name: "DUO_SEAT_2",
                getLabel: f(s.default.p7JgFM, s.default.wxkoLF),
                position: i[r.I.DEFAULT][4],
            },
            [a.x.SEAT_6]: {
                name: "DUO_SEAT_STANDING_1",
                getLabel: f(s.default.p7JgFM, s.default.Qt29nt),
                position: i[r.I.DEFAULT][5],
            },
            [a.x.SEAT_7]: {
                name: "MAIN_COUCH_SEAT_1",
                getLabel: f(s.default.wjBOG8, s.default.lQKxC5),
                position: i[r.I.DEFAULT][6],
            },
            [a.x.SEAT_8]: {
                name: "MAIN_COUCH_SEAT_2",
                getLabel: f(s.default.wjBOG8, s.default.WMBV4i),
                position: i[r.I.DEFAULT][7],
            },
            [a.x.SEAT_9]: {
                name: "MAIN_COUCH_SEAT_3",
                getLabel: f(s.default.wjBOG8, s.default["yG+xS0"]),
                position: i[r.I.DEFAULT][8],
            },
            [a.x.SEAT_10]: {
                name: "MAIN_COUCH_SEAT_4",
                getLabel: f(s.default.wjBOG8, s.default["5ZigwU"]),
                position: i[r.I.DEFAULT][9],
            },
            [a.x.SEAT_11]: {
                name: "MAIN_COUCH_SEAT_5",
                getLabel: f(s.default.wjBOG8, s.default.iVfA9i),
                position: i[r.I.DEFAULT][10],
            },
            [a.x.SEAT_12]: {
                name: "SIDE_GROUP_SEAT_1",
                getLabel: I(s.default["C+LGlh"], 1),
                position: i[r.I.DEFAULT][11],
            },
            [a.x.SEAT_13]: {
                name: "SIDE_GROUP_SEAT_2",
                getLabel: I(s.default["C+LGlh"], 2),
                position: i[r.I.DEFAULT][12],
            },
            [a.x.SEAT_14]: {
                name: "SIDE_GROUP_SEAT_3",
                getLabel: I(s.default["C+LGlh"], 3),
                position: i[r.I.DEFAULT][13],
            },
            [a.x.SEAT_15]: {
                name: "SIDE_GROUP_SEAT_STANDING_1",
                getLabel: f(s.default["C+LGlh"], s.default.Qt29nt),
                position: i[r.I.DEFAULT][14],
            },
            [a.x.SEAT_16]: {
                name: "BACKROOM_SEAT_1",
                getLabel: I(s.default.lkzfot, 1),
                position: i[r.I.DEFAULT][15],
                dim: !0,
            },
            [a.x.SEAT_17]: {
                name: "BACKROOM_SEAT_2",
                getLabel: I(s.default.lkzfot, 2),
                position: i[r.I.DEFAULT][16],
                dim: !0,
            },
            [a.x.SEAT_18]: {
                name: "BACKROOM_SEAT_3",
                getLabel: I(s.default.lkzfot, 3),
                position: i[r.I.DEFAULT][17],
                dim: !0,
            },
            [a.x.SEAT_19]: { name: "RAFTERS_SEAT_1", getLabel: I(s.default.IE3e0y, 1), position: i[r.I.DEFAULT][18] },
            [a.x.SEAT_20]: { name: "RAFTERS_SEAT_2", getLabel: I(s.default.IE3e0y, 2), position: i[r.I.DEFAULT][19] },
            [a.x.SEAT_21]: { name: "RAFTERS_SEAT_3", getLabel: I(s.default.IE3e0y, 3), position: i[r.I.DEFAULT][20] },
            [a.x.SEAT_22]: { name: "PC_SEAT_4", getLabel: I(s.default.ytIYuY, 4), position: i[r.I.DEFAULT][21] },
        },
        plants: [
            { plantDeadAsset: d.A, plantDyingAsset: c.A, plantLiveAsset: u.A, plantVaseAsset: _.A, x: 45.57, y: 50.62 },
        ],
        duck: {
            asset: "https://cdn.discordapp.com/assets/content/d9d44ce10fed728c82dc6c0b3b5aa0fdc8123f119ce8a9ac6e41b995e4e599c4.png",
            position: { x: 67.3, y: 45 },
            width: 4.8,
        },
        notePad: { asset: o, position: { x: 81.5, y: 84.5 }, width: 4 },
        screen: {
            topLeft: { x: 56.8, y: 16.15 },
            topRight: { x: 75.85, y: 23 },
            bottomRight: { x: 75.3, y: 41.3 },
            bottomLeft: { x: 56.95, y: 33.75 },
        },
    },
    [r.I.LIVING_ROOM_2]: {
        background:
            "https://cdn.discordapp.com/assets/content/57484075eadcb2b2e48de8d41457552634a2f8b7f280f903d9322804fbda494c.webp",
        backgroundBlurred: E,
        aspectRatio: 4384 / 3400,
        getName: () => l.intl.formatToPlainString(s.default["3xb4VY"], { number: 2 }),
        seats: {
            [a.x.SEAT_1]: { name: "PC_SEAT_1", getLabel: I(s.default.ytIYuY, 1), position: i[r.I.LIVING_ROOM_2][0] },
            [a.x.SEAT_2]: { name: "PC_SEAT_2", getLabel: I(s.default.ytIYuY, 2), position: i[r.I.LIVING_ROOM_2][1] },
            [a.x.SEAT_3]: { name: "PC_SEAT_3", getLabel: I(s.default.ytIYuY, 3), position: i[r.I.LIVING_ROOM_2][2] },
            [a.x.SEAT_4]: {
                name: "DUO_SEAT_1",
                getLabel: f(s.default.p7JgFM, s.default.YpJ7QS),
                position: i[r.I.LIVING_ROOM_2][3],
            },
            [a.x.SEAT_5]: {
                name: "DUO_SEAT_2",
                getLabel: f(s.default.p7JgFM, s.default.wxkoLF),
                position: i[r.I.LIVING_ROOM_2][4],
            },
            [a.x.SEAT_6]: {
                name: "DUO_SEAT_STANDING_1",
                getLabel: f(s.default.p7JgFM, s.default.Qt29nt),
                position: i[r.I.LIVING_ROOM_2][5],
            },
            [a.x.SEAT_7]: {
                name: "MAIN_COUCH_SEAT_1",
                getLabel: f(s.default.wjBOG8, s.default.lQKxC5),
                position: i[r.I.LIVING_ROOM_2][6],
            },
            [a.x.SEAT_8]: {
                name: "MAIN_COUCH_SEAT_2",
                getLabel: f(s.default.wjBOG8, s.default.WMBV4i),
                position: i[r.I.LIVING_ROOM_2][7],
            },
            [a.x.SEAT_9]: {
                name: "MAIN_COUCH_SEAT_3",
                getLabel: f(s.default.wjBOG8, s.default["yG+xS0"]),
                position: i[r.I.LIVING_ROOM_2][8],
            },
            [a.x.SEAT_10]: {
                name: "MAIN_COUCH_SEAT_4",
                getLabel: f(s.default.wjBOG8, s.default["5ZigwU"]),
                position: i[r.I.LIVING_ROOM_2][9],
            },
            [a.x.SEAT_11]: {
                name: "MAIN_COUCH_SEAT_5",
                getLabel: f(s.default.wjBOG8, s.default.iVfA9i),
                position: i[r.I.LIVING_ROOM_2][10],
            },
            [a.x.SEAT_12]: {
                name: "SIDE_GROUP_SEAT_1",
                getLabel: I(s.default["C+LGlh"], 1),
                position: i[r.I.LIVING_ROOM_2][11],
            },
            [a.x.SEAT_13]: {
                name: "SIDE_GROUP_SEAT_2",
                getLabel: I(s.default["C+LGlh"], 2),
                position: i[r.I.LIVING_ROOM_2][12],
            },
            [a.x.SEAT_14]: {
                name: "SIDE_GROUP_SEAT_3",
                getLabel: I(s.default["C+LGlh"], 3),
                position: i[r.I.LIVING_ROOM_2][13],
            },
            [a.x.SEAT_15]: {
                name: "SIDE_GROUP_SEAT_STANDING_1",
                getLabel: f(s.default["C+LGlh"], s.default.Qt29nt),
                position: i[r.I.LIVING_ROOM_2][14],
            },
            [a.x.SEAT_16]: {
                name: "BACKROOM_SEAT_1",
                getLabel: I(s.default.lkzfot, 1),
                position: i[r.I.LIVING_ROOM_2][15],
            },
            [a.x.SEAT_17]: {
                name: "BACKROOM_SEAT_2",
                getLabel: I(s.default.lkzfot, 2),
                position: i[r.I.LIVING_ROOM_2][16],
                dim: !0,
            },
            [a.x.SEAT_18]: {
                name: "BACKROOM_SEAT_3",
                getLabel: I(s.default.lkzfot, 3),
                position: i[r.I.LIVING_ROOM_2][17],
            },
            [a.x.SEAT_19]: {
                name: "RAFTERS_SEAT_1",
                getLabel: I(s.default.IE3e0y, 1),
                position: i[r.I.LIVING_ROOM_2][18],
            },
            [a.x.SEAT_20]: {
                name: "RAFTERS_SEAT_2",
                getLabel: I(s.default.IE3e0y, 2),
                position: i[r.I.LIVING_ROOM_2][19],
            },
            [a.x.SEAT_21]: {
                name: "RAFTERS_SEAT_3",
                getLabel: I(s.default.IE3e0y, 3),
                position: i[r.I.LIVING_ROOM_2][20],
            },
            [a.x.SEAT_22]: { name: "PC_SEAT_4", getLabel: I(s.default.ytIYuY, 4), position: i[r.I.LIVING_ROOM_2][21] },
        },
        plants: [
            {
                plantDeadAsset:
                    "https://cdn.discordapp.com/assets/content/7a45ce5860a7f922abfc1317208b6644d78da8565d46923f2c0cb8fd7f578816.png",
                plantDyingAsset:
                    "https://cdn.discordapp.com/assets/content/8a995ffd3b2b2ac90ca52801fff640f60f7d61867794f4ad1fc36b666135264f.png",
                plantLiveAsset:
                    "https://cdn.discordapp.com/assets/content/55b59222215ce7d8c7a443a92b9f7680e22c74e8547cb2e284ae3e4656decf4e.png",
                plantVaseAsset:
                    "https://cdn.discordapp.com/assets/content/4303bf11957be5ba44d39770f2a70cc5408909e8b859d96c69ecf8248ff6a105.png",
                x: 41,
                y: 46,
            },
        ],
        duck: {
            asset: "https://cdn.discordapp.com/assets/content/e83f1cfcbc5663b3f2c813b5b2791d6c00bb23ce233efc799f3fa7c6804783c7.png",
            position: { x: 64.6, y: 58.5 },
            width: 4.8,
        },
        notePad: { asset: o, position: { x: 69, y: 78.5 }, width: 4 },
        screen: {
            topLeft: { x: 51.85, y: 33.5 },
            topRight: { x: 69.15, y: 40.5 },
            bottomRight: { x: 69.3, y: 57.3 },
            bottomLeft: { x: 51.95, y: 49.1 },
        },
    },
};
