t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) =>
        `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
    rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
    rangeUnderflow: (e) =>
        `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
    unavailableDate: "Wybrana data jest niedostępna.",
};
