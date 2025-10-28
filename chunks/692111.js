t.d(a, { Z: () => u });
var u = {};
u = {
    rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
    rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
    rangeReversed: "Start date must be before end date.",
    unavailableDate: "Selected date unavailable.",
};
